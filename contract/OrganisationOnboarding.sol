// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OrganisationOnboarding {

  struct Organisation {
    string name;
    string types;
    string redirectURL;
    uint256 prise;
  }

  mapping (address=>Organisation) public organisations;

  string[4] private allowedTypes=["business", "market", "art", "development"];

  function organisationOnboard(string memory _name, string memory _types , string memory _redirectURL , uint256 _prise) public {    
    require(isValidType(_types),"Invalid organisation type");
  organisations[msg.sender]=Organisation(_name , _types , _redirectURL , _prise);
  }

  function getOrganisation(address _OrganisatioAddress) public view returns(string memory , string memory ) {
     Organisation memory organisation = organisations[_OrganisatioAddress];
     return (organisation.name , organisation.types);
  }


  // Helper function to check if the provided type is valid
 function isValidType(string memory _types) internal view returns(bool){
        for (uint i = 0; i < allowedTypes.length; i++) {
            if (keccak256(abi.encodePacked(allowedTypes[i])) == keccak256(abi.encodePacked(_types))) {
                return true;
            }
        }
        return false;
 }

} 