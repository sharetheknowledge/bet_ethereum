import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

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
      <Layout>
        <div>
          <h3>Bets</h3>

          <Button
            floated="right"
            content="Create Bet"
            icon="add circle"
            primary
          />
          {this.renderBets()}
        </div>
      </Layout>
    );
  }
}

export default BetIndex;
