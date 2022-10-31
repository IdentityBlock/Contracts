var verifierContract = artifacts.require("Verifier");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(verifierContract);
};
