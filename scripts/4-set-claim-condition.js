import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop(
  "0x235A1CbcF61b5EA255F1A5b26D6cD90448830fEB"
);

(async () => {
  try {
    const claimConditions = [
      {
        startTime: new Date(),
        maxQuantity: 10000,
        price: 0,
        quantityLimitPerTransaction: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Successfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
