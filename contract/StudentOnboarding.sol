// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract StudentOnboarding {

  struct Student{
    string name;
    string description;
  }

   mapping(address=>Student) public students;

   function studentOnboard(string memory _name , string memory _description) public {
             students[msg.sender] = Student(_name,_description);
   }

   function getStudent(address _StudentAddress) public view returns(string memory , string memory) {
     
     Student memory student = students[_StudentAddress];
      return (student.name , student.description);
   }

}