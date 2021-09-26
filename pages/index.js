import React, { Component } from "react";
import factory from "../ethereum/factory.js";

class BetIndex extends Component {
  static async getInitialProps() {
    const bets = await factory.methods.getDeployedBets().call();

    return { bets: bets };
  }

  // async componentDidMount() {
  //   const bets = await factory.methods.getDeployedBets().call();
  //
  //   console.log(bets);
  // }

  render() {
    return <div>{this.props.bets}</div>;
  }
}

export default BetIndex;
