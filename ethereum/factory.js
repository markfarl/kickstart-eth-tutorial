import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
		JSON.parse(CampaignFactory.interface),
		'0x42b1F42f6eDd2b63aaB1eBA391f80EFe3AD187CB'
    )

export default instance
