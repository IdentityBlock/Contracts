// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Accounts {
  uint private count; 
  constructor() {
    count = 0;
  }

  struct AccountStruct{
    uint id;
    string name;
    string email;
  }

  AccountStruct[] public accounts;

  function addAccount(string memory _name, string memory _email) public {
    count ++;
    accounts.push(AccountStruct(
      count,
      _name,
      _email
    )); //
  }

  function getAccount(uint _id) public view returns (AccountStruct memory) {
    return accounts[_id];
  }

}
