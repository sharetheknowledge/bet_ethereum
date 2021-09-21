const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledBetFactory = require("../ethereum/build/BetFactory.json");
const compiledBet = require("../ethereum/build/Bet.json");

let accounts;
let factory;
let bet;
let betAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(
    JSON.parse(compiledBetFactory.interface)
  )
    .deploy({ data: compiledBetFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  bet = await factory.methods
    .createBet("random statement", "1000000")
    .send({ from: accounts[0], gas: "1000000", value: 1000000 });

  [betAddress] = await factory.methods.getDeployedBets().call();

  //Now we want to access an already existing contract, so we'll use
  // web3.eth.Contract to which we pass the interface of the contract as
  // first argument, and the address of the contract as second argument.
  // As this bet has already been deployed, we don't need to deploy/send

  bet = await new web3.eth.Contract(
    JSON.parse(compiledBet.interface),
    betAddress
  );
});

describe("Bets", () => {
  it("deploys a factory and a bet", () => {
    assert.ok(factory.options.address);
    assert.ok(bet.options.address);
  });
});
