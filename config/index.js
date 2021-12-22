require('dotenv').config();

const Config = {
    keys: {
        bsc_mainnet: process.env.BSC_MAINNET_PRIVATE_KEY,
        bsc_testnet: process.env.BSC_TESTNET_PRIVATE_KEY,
        rinkeby: process.env.RINKEBY_PRIVATE_KEY,
    },
    contracts: {
        bsc_mainnet: {
            uniswapV2: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
        },
        bsc_testnet: {
            uniswapV2: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1'
        },
        rinkeby: {
            uniswapV2: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
        },
    },
    infuraId: process.env.INFURA_ID,
};

module.exports = Config;
