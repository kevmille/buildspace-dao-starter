import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa99433b850e283C13A31012f09cb00A8f00FA628",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "GiangHoDAO Tattoo",
        description: "This NFT will give you access to GiangHoDAO!",
        image: readFileSync("scripts/assets/tattoo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()