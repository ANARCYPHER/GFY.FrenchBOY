const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = async function (deployer, _network, address) {
  await deployer.deploy(Factory, address[0]);
  const factory = await Factory.deployed(); 

  let token1Address, token2address; 
  if(network === 'mainnet') {
    token1Address = '';
    token2Address = '';
  } else {
  }
  await factory.createPair();
};
