import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from "../../ethereum/factory"
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class CampaignNew extends Component{
  state = {
    minumumContribution:"",
    errorMessage: '',
    loading: false
  }
  onSubmit = async event => {
    event.preventDefault()
    this.setState({loading:true, errorMessage:''})

    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods
      .createCampaign(this.state.minumumContribution)
      .send({
        from: accounts[0]
      })
      Router.pushRoute('/')
      
    } catch (err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loading:false})

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
            <Button loading={this.state.loading} primary>Create</Button>
          </Form>
        </Layout>
      )
  }
}

export default CampaignNew;
