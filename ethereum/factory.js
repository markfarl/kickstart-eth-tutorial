import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
		JSON.parse(CampaignFactory.interface),
		'0xDBfEcff615Cc852b8c60799dd24f1C8b3A518E62'
    )

export default instance
