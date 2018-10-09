import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { Card, Grid, Button } from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import Campaign from '../../ethereum/campaign'
import ContributeForm from '../../components/ContributeForm'
import {Link} from '../../routes'

class CamapignShow extends Component{
	static async getInitialProps(props){
		const campaign = Campaign(props.query.address)
		const summary = await campaign.methods.getSummary().call()		
		return {
			address: props.query.address,
			minimumContribution: summary[0],
			balance: summary[1],
			requestCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		}
	}

	renderCards(){
		const {
			balance,
			manager,
			minimumContribution,
			requestCount,
			approversCount
		} = this.props

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The Manager created this campaign',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: minimumContribution,
				meta: 'minimumContribution (wei)',
				description: 'Min wei to contribute to campaign',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: requestCount,
				meta: 'amount of requests',
				description: 'Requests must be approved by approvers',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: approversCount,
				meta: 'amount of approvers',
				description: 'Amount of donatiosn to campaigns',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Balance in (eter)',
				description: 'Amount of donations to campaigns',
				style: {overflowWrap: 'break-word'}
			}
		]

		return <Card.Group items={items} />
	}
	render(){
		return (
			<Layout>
				<h1>Show Campaigns</h1>
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
							
						</Grid.Column>

						<Grid.Column width={6}>
							<ContributeForm address={this.props.address}/>

						</Grid.Column>	
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={10}>
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a>
									<Button primary>View Requests</Button>
								</a>
							</Link>							
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
			</Layout>
			)
	}
}

export default CamapignShow