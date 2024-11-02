// contracts/PaymentContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract PaymentContract {
    address payable public owner;
    uint256 public price;

    constructor(uint256 _initialPrice) {
        owner = payable(msg.sender);
        price = _initialPrice;
    }

    function makePayment() external payable {
        require(msg.value >= price, "Insufficient payment");
    }
}