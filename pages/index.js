import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'

class CampaignIndex extends Component{
  //keyword means funcion is called outside of instance
  static async getInitialProps(){
      const campaigns = await factory.methods.getDeployedCampaigns().call()
      return {campaigns} //ES2016
  }
  
  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return{
        header: address,
        description: <a>View Campaign</a>,
        fluid: true, //Lets card stretch sematnticui-prop         
      }
    })
    return <Card.Group items={items} />
  }
  
  render(){
    return(
    <Layout>
      <div>      
      <h3>Open Campaigns</h3>
      <Button
        floated="right" //Adds css style float:right
        content="Create Campaign"
        icon="add circle"
        primary //This equals primary={true} REACT shorthand
      />
      {this.renderCampaigns()}      
      </div>
    </Layout>
    )
  }
}

export default CampaignIndex
