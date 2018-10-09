const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const WalletProvider = reuqire('private.js')

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDwalletProvider(
		WalletProvider.seed,
		WalletProvider.provider);

const web3 = new Web3(provider);

const deploy = async() => {
	const accounts = await web3.eth.getAccounts();
	console.log('attempt from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({
			data: '0x' + compiledFactory.bytecode
		})
		.send({
			gas: '1000000',
			gasPrice: web3.utils.toWei('2', 'gwei'),
			from: accounts[0]
		});
	console.log('Contrat deploy to', result.options.address);
};
deploy();