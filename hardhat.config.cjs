// hardhat.config.cjs
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.27",
  networks: {
    aiaTestnet: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY ? `0x${process.env.PRIVATE_KEY}` : ""],
      chainId: 1320
    }
  }
};