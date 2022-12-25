require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/Ap3aewxV8MFxBt5eVr3RCdZuc6RqIrP4",
      accounts: [`0x${"f0298071303cf8421d3009a2b709aa441fbc75d580812834ac861e8de624723a"}`],
    },
  },
};
