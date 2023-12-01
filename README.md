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
To try out the live version of this application visit:  https://demvoter-fd17c.web.app
*note that the contract might have expired when you visit the site above (contract is to be expired on 3rd december 2023)

## DOCUMENTATION

The project is majorly divided into three parts:
1. The smart contract which acts like the backend
2. The components which interact with the backend
3. The front end components which brings application interactivity to the end users

I have used three components:
1. Connected: This is activated once the user is connected to his/her metamask wallet, it has functionality to display the candidates (in our case emirates in the UAE) and the facility to vote for any candidate while verifying that one individual can vote only once.
2. Finished: This is used to display a block page after the contract has been expired notifying the user that voting is finished.
3. Login: This is used to let the user connect to his/her metamask wallet

The functionality of the application is controlled from one file which is App.js, the core business logic and all the state management is handled within this file.

For the styling, I have put one file under the name of App.css and called it's classname's where required.
