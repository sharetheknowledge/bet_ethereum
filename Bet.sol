pragma solidity ^0.4.17;

contract Bet{
    address public manager;
    string public description;
    uint public contribution;
    address public better;
    uint public dummyBalance;




    function Bet(string desc,uint valueStaked) public payable{
        require(msg.value==valueStaked);
        // msg.value==valueStaked;
        manager=msg.sender;
        description=desc;
        contribution=valueStaked;



    }

    modifier restricted(){
        require(msg.sender==manager);
        _;
    }




    function contribute() public payable{
        require(msg.value==contribution);
        require(better==address(0));
        better=msg.sender;

    }

    function isManageRight(bool managerCorrect) public payable restricted {

        if(manager==better || better==address(0)){
            manager.transfer(this.balance);
        }

        if (managerCorrect == true) {
            manager.transfer(this.balance);

        } else if (managerCorrect==false) {
            better.transfer(this.balance);
        }

    }

    function viewBalance() public view returns(uint){
    return this.balance;
  }



}
