import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class BetNew extends Component {
  state = {
    contribution: "",
    description: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    // await factory.methods
    //   .createBet(this.state.description, this.state.contribution)
    //   .send({ from: accounts[0] });
    console.log(accounts);
  };

  render() {
    return (
      <Layout>
        <h3> Create a Bet </h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Meet the Bet !</label>
            <Input
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.contribution}
              onChange={(event) =>
                this.setState({ contribution: event.target.value })
              }
            />
            <Button primary>Create !</Button>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}

export default BetNew;
