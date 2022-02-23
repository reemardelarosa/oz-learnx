// hardhat.config.js
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");

const {
  alchemyApiKey,
  mnemonic
} = require('./secrets.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {
        mnemonic: mnemonic
      },
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: 'WZWMPQAQNAYKJEC5BFWIPEFP7KPGYAWW6M'
    }
  }
};