// scripts/deploy.cjs
const hre = require("hardhat");

async function main() {
  try {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    const PaymentContract = await hre.ethers.getContractFactory("PaymentContract");
    const payment = await PaymentContract.deploy(hre.ethers.utils.parseEther("0.01"));

    await payment.deployed();

    console.log("Contract deployed to:", payment.address);
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });