import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import { Card } from "semantic-ui-react";

class BetIndex extends Component {
  static async getInitialProps() {
    const bets = await factory.methods.getDeployedBets().call();

    return { bets: bets };
  }

  renderBets() {
    const items = this.props.bets.map((address) => {
      return {
        header: address,
        description: <a>View Bet</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  // async componentDidMount() {
  //   const bets = await factory.methods.getDeployedBets().call();
  //
  //   console.log(bets);
  // }

  render() {
    return (
      <div>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        {this.renderBets()}
      </div>
    );
  }
}

export default BetIndex;
