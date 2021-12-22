/**
 * @type {infuraId: string | undefined, keys: {bsc_testnet: string | undefined, rinkeby: string | undefined, bsc_mainnet: string | undefined}, contracts: {bsc_testnet: {uniswapV2: string}, rinkeby: {uniswapV2: string}, bsc_mainnet: {uniswapV2: string}}}
 */
const Config = require('./config');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  defaultNetwork: 'rinkeby',
  networks: {
    bsc_testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [Config.keys.bsc_testnet],
    },
    bsc_mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: [Config.keys.bsc_mainnet]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${Config.infuraId}`,
      accounts: [Config.keys.rinkeby]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
