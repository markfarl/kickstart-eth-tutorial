import Web3 from 'web3'
//const web3 = new Web3(window.web3.currentProvider) //Window is only availble in the browser, not in NodeJS

let web3

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask has web3
  web3 = new Web3(window.web3.currentProvider)
  console.log("browser")
} else {
  //We are on server OR user not in metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/G3Z3qTgQGZHNLsHowCnV'
  )
  web3 = new Web3(provider)
}

export default web3
