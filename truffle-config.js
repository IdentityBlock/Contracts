module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    loc_contracts_contracts: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1",
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
