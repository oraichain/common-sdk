import { Cw3FlexMultisigClient } from "@oraichain/common-contracts-sdk";
import { deployContract } from "@oraichain/common-contracts-build";
import { AppResponse, SimulateCosmWasmClient } from "@oraichain/cw-simulate";
import { InstantiateMsg as MultiSigInstantiateMsg } from "@oraichain/common-contracts-sdk/build/Cw3FixedMultisig.types";
import { MsgFundCommunityPool } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { Ok } from "ts-results";

const sender = "orai18hr8jggl3xnrutfujy2jwpeu0l76azprlvgrwt";
const fakeDistributionModuleAcc = "orai1jv65s3grqf6v6jl3dp4t6c9t9rk99cd85vjlgv";

function instantiateCosmWasmClient(): SimulateCosmWasmClient {
  return new SimulateCosmWasmClient({
    chainId: "Oraichain",
    bech32Prefix: "orai",
    async handleCustomMsg(msg) {
      if ("stargate" in msg) {
        if (
          msg.stargate.type_url ===
          "/cosmos.distribution.v1beta1.MsgFundCommunityPool"
        ) {
          const msgFund = MsgFundCommunityPool.decode(
            Buffer.from(msg.stargate.value, "base64")
          );
          return Ok<AppResponse>({
            events: [
              {
                type: "transfer",
                attributes: [
                  { key: "recipient", value: fakeDistributionModuleAcc },
                  { key: "sender", value: msgFund.depositor },
                  {
                    key: "amount",
                    value: msgFund.amount.find((fund) => fund).amount,
                  },
                ],
              },
            ],
            data: null,
          });
        }
      }
    },
  });
}

async function deployMultiSigContracts(client: SimulateCosmWasmClient) {
  const multisigContract = await deployContract(
    client,
    sender,
    {
      voters: [{ addr: sender, weight: 1 }],
      max_voting_period: { height: 1000 },
      threshold: { absolute_count: { weight: 1 } },
    } as MultiSigInstantiateMsg,
    "cw3-fixed-multisig",
    "cw3-fixed-multisig"
  );
  return { multisigContract };
}

async function simulate() {
  // fixture
  try {
    const cosmwasmClient = instantiateCosmWasmClient();
    const { multisigContract } = await deployMultiSigContracts(cosmwasmClient);
    const multisigClient = new Cw3FlexMultisigClient(
      cosmwasmClient,
      sender,
      multisigContract.contractAddress
    );

    // action
    await multisigClient.propose({
      description: "foobar",
      title: "foobar",
      msgs: [
        {
          stargate: {
            type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: Buffer.from(
              MsgFundCommunityPool.encode(
                MsgFundCommunityPool.fromPartial({
                  depositor: multisigClient.contractAddress,
                  amount: [{ denom: "orai", amount: "1" }],
                })
              ).finish()
            ).toString("base64"),
          },
        },
      ],
    });

    const result = await multisigClient.execute({ proposalId: 1 });

    // assert
    if (
      !result.events.find(
        (event) =>
          event.type === "transfer" &&
          event.attributes.find(
            (attr) =>
              attr.key === "recipient" &&
              attr.value === fakeDistributionModuleAcc
          ) &&
          event.attributes.find(
            (attr) =>
              attr.key === "sender" &&
              attr.value === multisigClient.contractAddress
          ) &&
          event.attributes.find(
            (attr) => attr.key === "amount" && attr.value === "1"
          )
      )
    ) {
      throw "Cannot find community pool funding transaction";
    }
    console.log("Simulation passed!");
  } catch (error) {
    console.log("error: ", error);
  }
}

simulate();
