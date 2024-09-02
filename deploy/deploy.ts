import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import chalk from "chalk";

const hre = require("hardhat");

const func: DeployFunction = async function () {
  const { fhenixjs, ethers } = hre;
  const { deploy } = hre.deployments;
  const [signer] = await ethers.getSigners();

  if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
    if (hre.network.name === "localfhenix") {
      await fhenixjs.getFunds(signer.address);
    } else {
      console.log(
        chalk.red(
          "Please fund your account with testnet FHE from https://faucet.fhenix.zone",
        ),
      );
      return;
    }
  }

  const encryptedNFT = await deploy("FHERC721", {
    from: signer.address,
    args: ["Your NFT Name", "NFTSYMBOL"],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(`FHERC721 contract: `, encryptedNFT.address);
};

export default func;
func.id = "deploy_fherc721";
func.tags = ["FHERC721"];
