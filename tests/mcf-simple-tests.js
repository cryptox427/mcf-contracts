const {expect} = require('chai');
const {expectRevert, ether} = require('@openzeppelin/test-helpers');
const {ethers, } = require('hardhat');
const config = require('../config')

const MCFSimpleFactory = artifacts.require('MCFSimpleFactory');
contract('MCFSimpleFactoryTest', function([owner, ...addrs]) {
    let mcfSimpleFactory;
    let deployer;
    beforeEach(async function() {
        mcfSimpleFactory = await MCFSimpleFactory.at('0x15c40cE5947daA3bd212D552DEe8F828633ca066');
        //console.log(MCFFactory);
        //mcfFactory = await MCFFactory.new();
        const [addr1] = await ethers.getSigners();
        deployer = addr1;
    });

    it('should set deploy fee on rinkeby', async () => {
        const tx = await mcfSimpleFactory.setDeployFee(
            ether('0.01')
        );
        // const receipt = tx.await();
        console.log('receipt', tx);
    });

    // it("should deploy correct on rinkeby", async () => {
    //     console.log('------', mcfSimpleFactory.address);
    //     const tx = await mcfSimpleFactory.deployNewInstance(
    //         'MEME Test',
    //         'MEGENTLE',
    //         6,
    //         1000000,
    //         config.contracts.bsc_testnet.uniswapV2,
    //         '0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8', {
    //             from: owner,
    //             value: ether('0.01'),
    //         }
    //     );
    //     console.log(tx);
    // });
});
