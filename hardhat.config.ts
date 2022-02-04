import * as dotenv from 'dotenv';

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-deploy';
import 'solidity-coverage';

dotenv.config();

const {
  INFURA_KEY,
  // ALCHEMY_KEY,
  MNEMONIC,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY,
  PRIVATE_KEY_TESTNET,
} = process.env;

const accountsTestnet = PRIVATE_KEY_TESTNET
  ? [PRIVATE_KEY_TESTNET]
  : { mnemonic: MNEMONIC };

const accountsMainnet = PRIVATE_KEY
  ? [PRIVATE_KEY]
  : { mnemonic: MNEMONIC };

module.exports = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    owner: {
      default: 0,
    },
  },
  networks: {
    hardhat: {},
    // hardhat: {
    //   forking: {
    //     url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    //     blockNumber: Number(process.env.HARDHAT_FORKING_BLOCKNUMBER) || undefined,
    //     accounts: accountsTestnet
    //   }
    // },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: accountsMainnet,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: accountsTestnet,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
  allowUnlimitedContractSize: true,
};
