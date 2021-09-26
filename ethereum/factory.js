import web3 from "./web3";
import BetFactory from "./build/BetFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(BetFactory.interface),
  "0x2bcA21280148Dbe49860194e76780B0fb148AA8A"
);

export default instance;
