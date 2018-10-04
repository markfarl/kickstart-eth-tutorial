import React, { Component } from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import { Router } from '../routes'


class ContributeForm extends Component{
	state = {
		value: '',
		errorMessage: '',
		loading: false
	}

	onSubmit = async event => {
		console.log(this.props.address)
		event.preventDefault()

		this.setState({
			errorMessage: '',
			loading:true,
		})
		const campaign = Campaign(this.props.address)
		try{
			console.log(this.state.value)
			const accounts = await web3.eth.getAccounts()
			await campaign.methods.contribute().send(
			{
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			})
			Router.replaceRoute(`/campaigns/${this.props.address}`)
		}catch(err){
			console.log(err)
			this.setState({ errorMessage: err.message})

		}
		this.setState({
			loading:false,			
			value:''
		})
	}

	render(){
		return(
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to contribute</label>
					<Input
						value={this.state.value}
						onChange={event => this.setState({value: event.target.value})}
						label="ether"
						labelPosition="right"
					/>
				</Form.Field>
				<Message error header="Oops" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>
					Contribute
				</Button>
			</Form>
			)
	}
}

export default ContributeForm