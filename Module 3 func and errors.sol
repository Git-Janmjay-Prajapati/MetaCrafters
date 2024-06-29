discription : For this project, write a smart contract that implements the require(), assert() and revert() statements.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartContract{
    address public owner;
    uint256 public value;

    constructor() {
        owner = msg.sender; // contract deployer is the owner
    }

    // Function to set value
    function setValue(uint256 newValue) public {
        
        require(newValue > 0, "Value must be greater than zero");
        require(msg.sender == owner, "Only owner can set the value");

        value = newValue;
    }

    // Function to double the value
    function doubleValue() public {
        
        uint256 doubledValue = value * 2;
        assert(doubledValue / 2 == value); 
        value = doubledValue;
    }

    // Function to reset value
    function resetValue() public {
        
        if (msg.sender != owner) {
            revert("Only owner can reset the value");
        }

        value = 0;
    }
}
