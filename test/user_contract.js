var User = artifacts.require("./User.sol");

contract("User", function (accounts) {
  var instance = null; // store the Users contract instance
  var mainAccount = accounts[0];
  var anotherAccount = accounts[1];

  it("Testing the constructor arguments funtion of user_contract", function () {
    return User.deployed()
      .then(function (contractInstance) {
        // storing the contract instance so it will be used later on
        instance = contractInstance;

        // calling the smart contract function getName to get the name of the user.
        return instance.getName.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserName",
          "name of the test deployed user must be 'testUserName'."
        );

        // calling the smart contract function getEmail to get the email of the user.
        return instance.getEmail.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserEmail",
          "email of the test deployed user must be 'testUserEmail'."
        );

        // calling the smart contract function getDOB to get the DOB of the user.
        return instance.getDOB.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserDOB",
          "DOB of the test deployed user must be 'testUserDOB'."
        );
        // calling the smart contract function getCountry to get the country of the user.
        return instance.getCountry.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserCountry",
          "Country of the test deployed user must be 'testUserCountry'."
        );
        // calling the smart contract function getMobile to get the mobile of the user.
        return instance.getMobile.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserMobile",
          "Mobile of the test deployed user must be 'testUserMobile'."
        );
        // calling the smart contract function getGender to get the gender of the user.
        return instance.getGender.call();
      })
      .then(function (result) {
        assert.equal(
          result,
          "testUserGender",
          "Gender of the test deployed user must be 'testUserGender'."
        );
      });
  }); // End of Testing the constructor arguments funtion of user_contract
});
