const {expect} = require('chai');
const {expectRevert, ether} = require('@openzeppelin/test-helpers');
const {ethers, } = require('hardhat');
const config = require('../config')

const MCFFactory = artifacts.require('MCFFactory');
contract('MCFFactoryTest', function([owner, ...addrs]) {
    let mcfFactory;
    let deployer;
    beforeEach(async function() {
        mcfFactory = await MCFFactory.at('0xb262DE91e9d57941e5d54909361347aB653f613C');
        //console.log(MCFFactory);
        //mcfFactory = await MCFFactory.new();
        const [addr1] = await ethers.getSigners();
        deployer = addr1;
    });

    it('should set deploy fee on rinkeby', async () => {
        const tx = await mcfFactory.setDeployFee(
            ether('0.001')
        );
        // const receipt = tx.await();
        console.log('receipt', tx);
    });

    // it("should deploy correct on rinkeby", async () => {
    //     console.log('------', mcfFactory.address);
    //     const deployFee = await mcfFactory.deployFee();
    //     console.log('deployFee----', deployFee.toString());
    //     const tx = await mcfFactory.deployNewInstance(
    //         'MEME Test',
    //         'MEGENTLE',
    //         6,
    //         1000000,
    //         10,
    //         10,
    //         60,
    //         config.contracts.bsc_testnet.uniswapV2,
    //         '0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8',
    //         '0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8', {
    //             from: owner,
    //             value: ether('0.01'),
    //         }
    //     );
    //     // const receipt = tx.await();
    //     console.log(tx);
    // });
});
