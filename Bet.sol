pragma solidity ^0.4.17;

contract Bet{
    address public manager;
    string public description;
    uint public contribution;
    address public better;
    bool public managerIsCorrect;



    function Bet(string desc,uint valueStaked) public payable{
        msg.value==valueStaked;
        manager=msg.sender;
        description=desc;
        contribution=valueStaked;

    }

    function contribute() public payable{
        require(msg.value==contribution);
        better=msg.sender;

    }

    // function isManagerright(bool managerCorrect) public {

    // }

}
