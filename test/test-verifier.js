// Right click on the script name and hit "Run" to execute
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Verify Token", async function () {
    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();
    console.log('verifier contract deployed at:'+ verifier.address)

  it("test verifyToken", async function () {
    
    const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

    expect(typeof await verifier.verifyToken("sample Token",user.address)).to.equal("object");
  });

});



describe("get Verified Token", async function () {
    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();
    console.log('verifier contract deployed at:'+ verifier.address)

  it("test getVerifiedToken", async function () {
    
    const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

    await verifier.verifyToken("sample Token",user.address)

    expect(await verifier.getVerifiedUserAddress("sample Token")).to.equal(user.address);

  });

});
