import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x235A1CbcF61b5EA255F1A5b26D6cD90448830fEB"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Wednesday the Cat",
        description: "This NFT will give you access to WendelDAO!",
        image: readFileSync("scripts/assets/wendel-in-the-window.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("❌ Failed to create the new NFT", error);
  }
})();
