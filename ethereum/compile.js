const path = require('path');// STandard modules no need to npm
const fs = require('fs-extra'); //File Sysytem module FS-Extra community made, few extra functions
const solc = require('solc')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath); //Part of the fs-extra features not in fs

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // If directory does not exist, this line creates it

for(let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','')+'.json'),
    output[contract]
  );
}



