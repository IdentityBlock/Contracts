// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IVerifier {
    function verifyToken(string memory token, address userContract)
        external
        returns (address);
}

contract User {
    // personal details to be shared when verifying the person
    string name;
    string email;
    string dob;
    string country;
    string mobile;
    string gender;

    // user wallet address - to restrict the updates of personal details
    address private owner;

    // wallet address of last verifier
    // - we give permission for this address to retrieve our personal data
    address lastVerifier;

    string[] verifications;

    constructor(
        string memory _name,
        string memory _email,
        string memory _dob,
        string memory _country,
        string memory _mobile,
        string memory _gender
    ) {
        owner = msg.sender;
        name = _name;
        email = _email;
        dob = _dob;
        country = _country;
        mobile = _mobile;
        gender = _gender;
    }

    // modifier to restrict the change of personal data only for the owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    // modifier for giving permission to retreive our personal details only to the verifier
    modifier isVerified() {
        require(
            msg.sender == lastVerifier || msg.sender == owner,
            "Caller is not the verifier"
        );
        _;
    }

    // setters for default personal details - restricted only to the owner
    function setName(string memory _name) public isOwner {
        name = _name;
    }

    function setEmail(string memory _email) public isOwner {
        email = _email;
    }

    function setDOB(string memory _dob) public isOwner {
        dob = _dob;
    }

    function setCountry(string memory _country) public isOwner {
        country = _country;
    }

    function setMobile(string memory _mobile) public isOwner {
        mobile = _mobile;
    }

    function setGender(string memory _gender) public isOwner {
        gender = _gender;
    }

    function verify(
        address _verifierContract,
        address _user,
        string memory _token
    ) public isOwner {
        lastVerifier = IVerifier(_verifierContract).verifyToken(_token, _user);
    }

    function addVerification(string memory _verification) public isOwner {
        verifications.push(_verification);
    }

    function getVerifications() public view isOwner returns (string[] memory) {
        return verifications;
    }

    // getters for default personal detials - restricted only for last verifier and owner
    function getName() public view isVerified returns (string memory _name) {
        return name;
    }

    function getEmail() public view isVerified returns (string memory _email) {
        return email;
    }

    function getDOB() public view isVerified returns (string memory _dob) {
        return dob;
    }

    function getCountry()
        public
        view
        isVerified
        returns (string memory _country)
    {
        return country;
    }

    function getMobile()
        public
        view
        isVerified
        returns (string memory _mobile)
    {
        return mobile;
    }

    function getGender()
        public
        view
        isVerified
        returns (string memory _gender)
    {
        return gender;
    }
}
