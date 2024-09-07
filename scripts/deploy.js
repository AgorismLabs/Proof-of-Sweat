const hre = require("hardhat");

async function main() {
  const ProofOfSweat = await hre.ethers.getContractFactory("ProofOfSweat");
  const proofOfSweat = await ProofOfSweat.deploy();
  await proofOfSweat.deployed();
  console.log("ProofOfSweat deployed to:", proofOfSweat.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
