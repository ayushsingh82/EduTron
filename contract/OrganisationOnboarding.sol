// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserForm {
    // Structure to store organization details
    struct Organisation {
        string name;
        string orgType;
        string redirectURL;
        uint256 prize;
    }

    // Array to store all organizations
    Organisation[] private organisationsList;

    // Mapping to store each organization's submission based on their Ethereum address
    mapping(address => Organisation) public organisations;

    // Event to emit when an organization submits their form
    event OrganisationOnboarded(
        address indexed orgAddress,
        string name,
        string orgType,
        string redirectURL,
        uint256 prize
    );

    // Function to onboard an organization without checking the type
    function organisationOnboard(string memory _name, string memory _types, string memory _redirectURL, uint256 _prize) public {
        // Store the organization data in the mapping
        organisations[msg.sender] = Organisation(_name, _types, _redirectURL, _prize);
        organisationsList.push(Organisation(_name, _types, _redirectURL, _prize)); // Store in array for getAllOrgs()

        // Emit the event
        emit OrganisationOnboarded(msg.sender, _name, _types, _redirectURL, _prize);
    }


    // Function to retrieve all organizations
    function getAllOrgs() public view returns (Organisation[] memory) {
        return organisationsList;
    }
}
