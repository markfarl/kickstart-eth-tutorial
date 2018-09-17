import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from "../../ethereum/factory"
import web3 from '../../ethereum/web3'

class CampaignNew extends Component{
  state = {
    minumumContribution:""
  }
  onSubmit = async event => {
    event.preventDefault()
    const accounts = await web3.eth.getAccounts()
    
    await factory.methods
    .createCampaign(this.state.minumumContribution)
    .send({
      from: accounts[0]
    })
  }
  render(){
      return (
        <Layout>        
          <h1>New Campaign</h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Minimun Contribution</label>
              <Input
              label="wei" 
              labelPosition="right"
              value={this.state.minumumContribution}
              onChange={event => this.setState({minumumContribution: event.target.value})}
               />
            </Form.Field>
            <Button primary>Create</Button>
          </Form>
        </Layout>
      )
  }
}

export default CampaignNew;
