pragma solidity ^0.4.17;

contract Bet{
    address public manager;
    string public description;
    uint public contribution;


    function Bet(string desc,uint minimum) public{
        manager=msg.sender;
        description=desc;
        contribution=minimum;

    }
}
