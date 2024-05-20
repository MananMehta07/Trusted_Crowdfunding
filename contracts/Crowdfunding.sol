//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Crowdfunding {
    address public owner;
    uint public goalAmount;
    mapping(address => uint) public donations;
    uint public totalAmount;
    bool public goalReached;
  

    constructor(address _owner){
        owner = _owner;
        goalAmount = 5 ether;
        goalReached = false;
       
    }

    function donate(uint _amount) external payable {
        require(!goalReached, "Goal already reached");
        require(totalAmount + _amount <= goalAmount, "Goal already reached");
        
        donations[msg.sender] += _amount;
        totalAmount += _amount;

        if (totalAmount >= goalAmount) {
            goalReached = true;
        }
    }

    function getOwner() external view returns (address) {
        return owner;
    }

    function getTotalAmount() external view returns (uint) {
        return totalAmount;
    }

    function getGoalAmount() external view returns (uint) {
        return goalAmount;
}
}