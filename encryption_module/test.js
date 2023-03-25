import { uploadEncryptionIpfs } from "./index.js";
require("dotenv").config({ path: "../../.env" });

const run = async () => {
  const cid = await uploadEncryptionIpfs(
    process.env.WEB3_STORAGE_API_KEY,
    "./hi",
    "password"
  );
  console.log(cid);
};
run();
