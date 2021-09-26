import React, { Component } from "react";
import factory from "../ethereum/factory.js";

class BetIndex extends Component {
  async componentDidMount() {
    const bets = await factory.methods.getDeployedBets().call();

    console.log(bets);
  }

  render() {
    return <div>Bets Index!</div>;
  }
}

export default BetIndex;
