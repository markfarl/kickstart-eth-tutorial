const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDwalletProvider(
		'double used spray silver snake nice blossom shallow section profit mistake collect',
		'https://rinkeby.infura.io/G3Z3qTgQGZHNLsHowCnV');

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

// deployed 0x7e94150E29da7b5B40c322505c40133d1888f250
// deployed 0x42b1F42f6eDd2b63aaB1eBA391f80EFe3AD187CB
