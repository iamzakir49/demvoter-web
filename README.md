DEMVOTER

This is a application made for Voeux IT Dubai by Zakir Hussain to implement voting in solidity smart contract using ReactJS as frontend, this is a serverless architecture based project. 
It enables users to vote for their favorite emirate in the United Arab Emirates.

## Installation

After you cloned the repository, install the packages using

```shell
npm install
```

You need to input your blockchain network's API address in a .env file the structure for the .env file is as follows:

API_URL = "YOUR_BLOACKCHAIN_NETWORK_API_URL"
PRIVATE_KEY = "YOUR_WALLET_ACCOUNT_PRIVATE_KEY"
CONTRACT_ADDRESS = "ENTER_YOUR_CONTRACT_ADDRESS_AFTER_UPLOAD"

I have used the sepolia testnet you are free to use any testnet or mainnet, just configure the hardhat-config.js file with your blockchain's endpoint.

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file as well as to the constant.js file located in Constant directory. 

Once you have pasted your private key and contract address in the .env file and the constant.js file, simply run command

```shell
npm start
```

## DOCUMENTATION


