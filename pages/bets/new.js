import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class BetNew extends Component {
  state = {
    contribution: "",
    description: "",
    errorMessage: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await factory.methods
        .createBet(this.state.description, this.state.contribution)
        .send({ from: accounts[0], value: this.state.contribution });
      console.log(accounts);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  render() {
    return (
      <Layout>
        <h3> Create a Bet </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary>Create !</Button>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}

export default BetNew;
