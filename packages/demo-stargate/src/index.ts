import { SigningCosmWasmClient } from '@oraichain/common-contracts-sdk';
import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx';
import { MsgFundCommunityPool } from 'cosmjs-types/cosmos/distribution/v1beta1/tx';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { GasPrice } from '@cosmjs/stargate';
import 'dotenv/config';
import { DemoStargateClient } from './DemoStargate.client';

const sender = 'orai18hr8jggl3xnrutfujy2jwpeu0l76azprlvgrwt';
const demoContract = 'orai19dlyf58lfzaqwkvn63xqawqq3xxyypd6l7h9rh5qjtmx8ym22nfqtups8c'; // https://github.com/oraichain/demo-stargate.git

async function instantiateCosmWasmClient(): Promise<SigningCosmWasmClient> {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, { prefix: 'orai' });
  const accounts = await wallet.getAccounts();
  console.log(accounts[0].address);
  return SigningCosmWasmClient.connectWithSigner('https://rpc.orai.io', wallet, { gasPrice: GasPrice.fromString('0.001orai'), prefix: 'orai' });
}

async function demoSend() {
  const cosmwasmClient = await instantiateCosmWasmClient();
  const multisigClient = new DemoStargateClient(cosmwasmClient, sender, demoContract);
  const result = await multisigClient.execute({
    msg: {
      stargate: {
        type_url: '/cosmos.bank.v1beta1.MsgSend',
        value: Buffer.from(
          MsgSend.encode(
            MsgSend.fromPartial({
              fromAddress: multisigClient.contractAddress,
              toAddress: sender,
              amount: [{ denom: 'orai', amount: '1' }]
            })
          ).finish()
        ).toString('base64')
      }
    }
  });
  console.log('result: ', result);
}

async function demoFundCommunityPool() {
  const cosmwasmClient = await instantiateCosmWasmClient();
  const multisigClient = new DemoStargateClient(cosmwasmClient, sender, demoContract);
  const result = await multisigClient.execute({
    msg: {
      stargate: {
        type_url: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
        value: Buffer.from(
          MsgFundCommunityPool.encode(
            MsgFundCommunityPool.fromPartial({
              depositor: multisigClient.contractAddress,
              amount: [{ denom: 'orai', amount: '1' }]
            })
          ).finish()
        ).toString('base64')
      }
    }
  });
  console.log('result: ', result);
}

async function demo() {
  await demoSend();
  await demoFundCommunityPool();
}

demo();
