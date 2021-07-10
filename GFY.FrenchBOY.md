pragma solidity =0.5.16;
const Factory = artifacts.require("UniSwapV2Factory.sol");
const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");

module.exports = async functin (deployer, network, address) {
   await deployer.deploy(Factory, address[0]);
   const factory = await Factory.deployed();

   let token1Address, token2Address;
   if(network === 'mainnet) {
     token1Address = '';
     token2Address = '';
  } else {
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    token1Address = token1.address;
    token2Address = token2.address;  
   } 
   await factory.createPair(token1Adress, token2Adress);
};



================
pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20Detailed, ERC20 {
        constructor() ERC20Detailed('Token1', 'TK1', 18) public {}
}



Token2=======================



pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token2 is ERC20Detailed, ERC20 {
        constructor() ERC20Detailed('Token2', 'TK2', 18) public {}
}


