import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from "../../ethereum/factory"
import web3 from '../../ethereum/web3'

class CampaignNew extends Component{
  state = {
    minumumContribution:"",
    errorMessage: ''
  }
  onSubmit = async event => {
    event.preventDefault()
    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods
      .createCampaign(this.state.minumumContribution)
      .send({
        from: accounts[0]
      })
    } catch (err){
      this.setState({errorMessage: err.message})
    }
    
  }
  render(){
      return (
        <Layout>        
          <h1>New Campaign</h1>
          <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Minimun Contribution</label>
              <Input
              label="wei" 
              labelPosition="right"
              value={this.state.minumumContribution}
              onChange={event => this.setState({minumumContribution: event.target.value})}
               />
            </Form.Field>
            <Message error header="Oops" content={this.state.errorMessage} />
            <Button primary>Create</Button>
          </Form>
        </Layout>
      )
  }
}

export default CampaignNew;
