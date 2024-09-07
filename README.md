# Pumpfun PumpPortal Bump Bot

This is a bump bot that interacts with the PumpPortal API to perform automated buying and selling of tokens on the pumpfun.
I made this after seeing all of the scam bumpbots being promoted on reddit and in youtube videos.
The majority of pumpfun bumpbots that are promoted will take your sol and send it to the scammer. (they will probably copy this at some point too)
Make sure the code is understandable before you put any sol into a bot or plug in your privatekeys or api keys. If you don't know a lot of code, ask chatgpt to give you a detailed explanation on what every function does.
The purpose of a bump bot is to make your token appear on the main page of pumpfun.
Your token gets bumped to the top of the page each time there is a buy.

> ## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

> ## Installation

1. Install Node.js and npm:

   - Visit the official [Node.js website](https://nodejs.org/)
   - Download and install the LTS version for your operating system
   - This will install both Node.js and npm

2. Create a new directory for your project and navigate to it:
   **mkdir pumpportal-bot**
   **cd pumpportal-bot**

3. Initialize a new Node.js project:
   **npm init -y**

4. Install the required dependencies:
   **npm install node-fetch**

5. Create a new file named `pumpfunBumpBot.js` and copy the provided script into it or alternatively clone the github repo

> ## Getting a PumpPortal API Key

To use this bot, you need to obtain an API key from PumpPortal:

1. Go to [https://pumpportal.fun/trading-api/setup](https://pumpportal.fun/trading-api/setup)
2. Follow the instructions on the page to generate your API key
3. Copy the generated API key and replace `"your-pumpportal-api-key-here"` in the script with your actual API key

> ## Configuration

Before running the script, you need to configure the following variables in the `pumpfunBumpBot.js` file:

- `API_KEY`: Your PumpPortal API key (get it from https://pumpportal.fun/trading-api/setup)
- `TOKEN_MINT`: The mint address of the token you want to trade
- `BUY_AMOUNT`: Amount of SOL to spend on each buy
- `TIME_BETWEEN_BUYS`: Time in milliseconds between buy transactions
- `TIME_BEFORE_SELL`: Time in milliseconds to wait before selling
- `TIME_AFTER_SELL` : Time in milliseconds to wait after the sell before buying again
- `NUMBER_OF_BUYS`: Number of buy transactions before selling (This is per cycle. There is currently no setting for number of cycles, so just hit ctrl+c to end the script)
- `SLIPPAGE`: Slippage percentage for transactions
- `PRIORITY_FEE`: Priority fee for transactions (gas fee)

> ## Usage

To run the bot, use the following command in your terminal:
**node pumpfunBumpBot.js**

The bot will continuously perform buy and sell cycles based on the configured parameters. It will log transaction details to the console.
Note that when the bot sells, it sells 100% of the tokens in the wallet (for the token you are bumping). 
I designed it this way so if there are any failed buys or even a failed sell, the next cycle will take care of it.
The 3 time variables plus *number of buys* variable, in the configuration section give you complete control over the buy/sell cycle and its timing. 
If you want to alternate buys and sells, just set number of buys to 1. 
Ctrl + c to end the script, until i add in a total cycles option in the config.

> ## Disclaimer

Use this bot at your own risk and make sure you understand the implications of automated trading. Always research bump bots carefully. The majority of them are scams that will send your sol to someone elses address.

> ## TIP WALLET

If you find this useful, feel free to send me a tip or some of your tokens (I won't jeet unless you do).
Solana Tip Address: 5Y7aD92AZVzwUkWCchR65By4Rb194xJkkz8MRJSD3F1

