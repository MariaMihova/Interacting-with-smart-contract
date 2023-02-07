// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

interface Contract{
    function attempt() external;
}

contract MarysContract{
    address public contractAddress;

    constructor(address contAddress){
        contractAddress = contAddress;
    }

    function win() external{
        Contract(contractAddress).attempt();
    }
}
// th.origin != msg.sender