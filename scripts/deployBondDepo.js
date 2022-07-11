const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: " + deployer.address);
    const authority = "0x05b24E8833Ba839d638e1FBF69824E93b5f498D2";
    const ohm = "0x1B7f404601ee80D633297daB5b446ff8a467a0E5";
    const gohm = "0xb3a468800804B5a842a4eaF9021B44cD7536e899";
    const staking = "0xeF73cAA82bf408039090f916A78d411106ff51e5";
    const treasury = "0x0c54fc3Eb695598f476dAC5c80500efB5Dc4164d";
    const depoPro = "0x10d79787282C9aFe242785E2C2C34E89Be52cE33";
    // const depoFactory = await ethers.getContractFactory("OlympusBondDepositoryV2");

    // const depo = await depoFactory.deploy(authority, ohm, gohm, staking, treasury);

    // console.log("Bond Depo: " + depo.address);
    const BondCreator = await ethers.getContractFactory("OlympusProInverseBondCreator");

    const bondCreator = await BondCreator.deploy(ohm,treasury, gohm, authority);

    console.log("Bond Depo: " + bondCreator.address);

}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
