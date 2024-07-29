require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["da04b72382a04382c3ce5c5d2b80455b3c7112b5eae2623e9738cb8104aed3e9"], //Your private key starting with "0x"
    },
  },
};
