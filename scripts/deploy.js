
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const MCFFactory = await ethers.getContractFactory('MCFFactory');
    const mcfFactory = await MCFFactory.deploy();

    const MCFSimpleFactory = await ethers.getContractFactory('MCFSimpleFactory');
    const mcfSimpleFactory = await MCFSimpleFactory.deploy();

    console.log('----------------Deployed Address--------------');
    console.log('MFC Factory:', mcfFactory.address);
    console.log('MFC Simple Factory:', mcfSimpleFactory.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
