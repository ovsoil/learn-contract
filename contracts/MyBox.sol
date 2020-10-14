// contracts/MyBox.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "./Auth.sol";

contract MyBox {
    uint256 private value;
    Auth private auth;

    constructor(Auth _auth) public {
        auth = _auth;
    }

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        require(auth.isAdministrator(msg.sender), "Unauthorized");

        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }
}
