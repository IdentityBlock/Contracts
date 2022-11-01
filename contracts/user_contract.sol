// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract User{
    // personal details to be shared when verifying the person
    string nic;
    string name;
    string mobile;
    string user_address;

    // user wallet address - to restrict the updates of personal details
    address private owner;

    // wallet address of last verifier 
        // - we give permission for this address to retrieve our personal data
    address lastVerifier;

    constructor() {
        owner = msg.sender;
    }

    // modifier to restrict the change of personal data only for the owner
    modifier isOwner() {
       require(msg.sender == owner, "Caller is not owner");
        _;
    }

    // modifier for giving permission to retreive our personal details only to the verifier
    modifier isVerified() {
       require(msg.sender == lastVerifier, "Caller is not the verifier");
        _;
    }

    // setters for personal details - restricted only to the owner
    function setNIC(string memory _nic) public isOwner{
        nic= _nic;
    }
    function setName(string memory _name) public isOwner{
        name = _name;
    }
    function setMobile(string memory _mobile) public isOwner{
        mobile = _mobile;
    }
    function setUserAddr(string memory _user_addr) public isOwner{
        user_address = _user_addr;
    }
    function setLastVerifier(address verifier) public isOwner{
        lastVerifier = verifier;
    }

    // getters for personal detials - restricted only for last verifier
    function getNIC() public view isVerified returns (string memory _nic){
        return nic;
    }
    function getName() public view isVerified returns (string memory _name){
        return name;
    }
    function getMobile() public view isVerified returns (string memory _mobile){
        return mobile;
    }
    function getUserAddr() public view isVerified returns (string memory _user_addr){
        return user_address;
    }
}