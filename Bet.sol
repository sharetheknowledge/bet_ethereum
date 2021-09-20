pragma solidity ^0.4.17;


//Link that I belive helped me pass value from the factory Bet to the child Bet contract https://ethereum.stackexchange.com/questions/62031/create-a-child-contract-from-a-parent-contract-and-forward-the-sender-amount-to?rq=1
contract BetFactory{
    address[] public deployedBets;

    function createBet(string desc, uint valueStaked) public payable{

        address newBet=(new Bet).value(msg.value)(desc, valueStaked,msg.sender);
        deployedBets.push(newBet);
    }

    function getDeployedBets() public view returns (address[]){
        return deployedBets;
    }
}




contract Bet{
    address public manager;
    string public description;
    uint public contribution;
    address public better;
    uint public contractBalance;





    function Bet(string desc,uint valueStaked, address creator) public payable{
        require(msg.value==valueStaked);
        manager=creator;
        description=desc;
        contribution=valueStaked;
        contractBalance=address(this).balance;



    }



    modifier restricted(){
        require(msg.sender==manager);
        _;
    }




    function contribute() public payable{

        require(msg.value==contribution);
        require(msg.value==contractBalance);
        require(msg.sender!=manager);
        require(better==address(0));
        better=msg.sender;
        contractBalance=address(this).balance;

    }

    function isManageRight(bool managerCorrect) public restricted {

        if(better==address(0)){
            manager.transfer(this.balance);
        }

        if (managerCorrect == true) {
            manager.transfer(this.balance);

        } else if (managerCorrect==false) {
            better.transfer(this.balance);
        }
        contractBalance=address(this).balance;

    }

    function viewBalance() public view returns(uint){
    return this.balance;
  }



}
