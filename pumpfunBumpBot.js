import("node-fetch").then(({ default: fetch }) => {
  // Configuration Section
  const API_KEY = "your-pumpportal-api-key-here"; // generate your own api key from pumpportal (https://pumpportal.fun/trading-api/setup) your api key should not be published anywhere. it gives access to your wallet private key
  const TOKEN_MINT = "your-tokens-mint-address-here"; // example "xxxxxxxxxxxxM6BWiJVhmttjpump"
  const BUY_AMOUNT = 0.023; // Amount of SOL to spend on each buy
  const TIME_BETWEEN_BUYS = 5000; // 5 seconds
  const TIME_BEFORE_SELL = 10000; // 10 seconds
  const TIME_AFTER_SELL = 5000; // 5 seconds - so you don't attempt to buy before the sol is back in your wallet
  const NUMBER_OF_BUYS = 3; // Number of buys before selling. Note that the sell will sell all the tokens at once. If you don't want that happening, set buys to 1.
  const SLIPPAGE = 10; // 10% slippage
  const PRIORITY_FEE = 0.0003; // this is the 'gas' fee. note that pumpportal will also take a transaction fee of 0.5% If you get failed transactions set the fee slightly higher. 0.0003 seems to work consistently.

  // End Configuration Section

  async function buy() {
    const response = await fetch(
      `https://pumpportal.fun/api/trade?api-key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "buy",
          mint: TOKEN_MINT,
          amount: BUY_AMOUNT,
          denominatedInSol: "true",
          slippage: SLIPPAGE,
          priorityFee: PRIORITY_FEE,
          pool: "pump",
        }),
      }
    );

    const data = await response.json();
    console.log("BUY transaction:", data);
    return data;
  }

  async function sell() {
    const response = await fetch(
      `https://pumpportal.fun/api/trade?api-key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "sell",
          mint: TOKEN_MINT,
          amount: "100%",
          denominatedInSol: "false",
          slippage: SLIPPAGE,
          priorityFee: PRIORITY_FEE,
          pool: "pump",
        }),
      }
    );

    const data = await response.json();
    console.log("SELL transaction:", data);
    return data;
  }

  async function runBumpBot() {
    while (true) {
      for (let i = 0; i < NUMBER_OF_BUYS; i++) {
        await buy();
        await new Promise((resolve) => setTimeout(resolve, TIME_BETWEEN_BUYS));
      }

      await new Promise((resolve) => setTimeout(resolve, TIME_BEFORE_SELL));
      await sell();

      await new Promise((resolve) => setTimeout(resolve, TIME_AFTER_SELL));
    }
  }

  runBumpBot().catch(console.error);
});
