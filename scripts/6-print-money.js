import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x2241f727BAcc72Cd520dd38023cb9e2A5C075bb9");

(async () => {
  try {
    const amount = 1000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$WENDEL in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
