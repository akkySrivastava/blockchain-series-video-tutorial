const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = require("./secret.json").memonic;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    bsctestnet: {
      networkCheckTimeout: 10000,
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
      },
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 100000,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.4", // A version or constraint - Ex. "^0.5.0"
    },
  },
};
