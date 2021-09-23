const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledBetFactory = require("./build/BetFactory.json");

const provider = new HDWalletProvider(
  "satoshi frozen guess usual punch grunt lobster they pony hurry again jaguar",
  "https://rinkeby.infura.io/v3/cc13a672e1dd43a6bd4c0734453e0e7e"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledBetFactory.interface)
  )
    .deploy({ data: compiledBetFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);
  // console.log(compiledBetFactory);
};

deploy();
