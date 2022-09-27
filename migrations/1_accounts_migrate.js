var accountsContract = artifacts.require("Accounts");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(accountsContract);
};