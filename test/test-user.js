// Right click on the script name and hit "Run" to execute
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("getName and setName", async function () {
    const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

  it("test initial name", async function () {
    
    expect(await user.getName()).to.equal("Name");
  });
   it("test updating and retrieving updated name", async function () {
    
    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setName("abc");
    await setValue.wait();
    expect(await user2.getName()).to.equal("abc");
  });
});

describe("getEmail and setEmail", async function () {
      const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

  it("test initial email", async function () {

    expect(await user.getEmail()).to.equal("Email");
  });
   it("test updating and retrieving updated email", async function () {

    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setEmail("abc");
    await setValue.wait();
    expect(await user2.getEmail()).to.equal("abc");
  });
});

describe("getDOB and setDOB", async function () {
      const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

  it("test initial DOB", async function () {

    expect(await user.getDOB()).to.equal("DOB");
  });
   it("test updating and retrieving updated DOB", async function () {

    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setDOB("abc");
    await setValue.wait();
    expect(await user2.getDOB()).to.equal("abc");
  });
});

describe("getCountry and setCountry", async function () {
      const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

  it("test initial county", async function () {

    expect(await user.getCountry()).to.equal("Country");
  });
   it("test updating and retrieving updated country", async function () {

    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setCountry("abc");
    await setValue.wait();
    expect(await user2.getCountry()).to.equal("abc");
  });
});

describe("getMobile setMobile", async function () {
      const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

  it("test initial mobile", async function () {

    expect(await user.getMobile()).to.equal("Mobile");
  });
   it("test updating and retrieving updated mobile", async function () {

    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setMobile("abc");
    await setValue.wait();
    expect(await user2.getMobile()).to.equal("abc");
  });
});

describe("getGender setGender", async function () {
      const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)
    
  it("test initial mobile", async function () {

    expect(await user.getGender()).to.equal("Gender");
  });
   it("test updating and retrieving updated gender", async function () {

    const user2 = await ethers.getContractAt("User", user.address);
    const setValue = await user2.setGender("abc");
    await setValue.wait();
    expect(await user2.getGender()).to.equal("abc");
  });
});


describe("verify function", async function () {
    const User = await ethers.getContractFactory("User");
    const user = await User.deploy("Name","Email","DOB","Country","Mobile","Gender");
    await user.deployed();
    console.log('user contract deployed at:'+ user.address)

    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();
    console.log('verifier contract deployed at:'+ verifier.address)
    
  it("test verify from user contract", async function () {

    expect(typeof await user.verify(verifier.address,user.address,"sampleToken")).to.equal("object");
  });
});