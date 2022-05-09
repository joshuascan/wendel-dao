import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x7Be803CD91310adba5A6187D3E48610Cb40bF6af");
const token = sdk.getToken("0x2241f727BAcc72Cd520dd38023cb9e2A5C075bb9");

(async () => {
  try {
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "Failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = (Number(ownedAmount) / 100) * 90;

    await token.transfer(vote.getAddress(), percent90);

    console.log(
      "✅ Successfully transferred " + percent90 + " tokens to vote contract"
    );
  } catch (error) {
    console.error("Failed to transfer tokens to vote contract", error);
  }
})();
