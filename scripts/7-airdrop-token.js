import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  "0x235A1CbcF61b5EA255F1A5b26D6cD90448830fEB"
);
const token = sdk.getToken("0x2241f727BAcc72Cd520dd38023cb9e2A5C075bb9");

(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!"
      );
      process.exit(0);
    }

    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log(
      "✅ Successfully airdropped tokens to all the holders of the NFT!"
    );
  } catch (error) {
    console.error("Failed to airdrop tokens", error);
  }
})();
