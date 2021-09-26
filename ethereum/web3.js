import Web3 from "web3";
const HDWalletProvider = require("truffle-hdwallet-provider");

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new HDWalletProvider(
    "satoshi frozen guess usual punch grunt lobster they pony hurry again jaguar",
    "https://rinkeby.infura.io/v3/cc13a672e1dd43a6bd4c0734453e0e7e"
  );

  web3 = new Web3(provider);
}

export default web3;
