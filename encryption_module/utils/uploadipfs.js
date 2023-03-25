import { Web3Storage, getFilesFromPath } from "web3.storage";
require("dotenv").config({ path: ".env" });
const WEB3_STORAGE_API_KEY = process.env.WEB3_STORAGE_API_KEY;
export async function uploadToIpfs(WEB3_STORAGE_API_KEY, folderLocation) {
  if (!WEB3_STORAGE_API_KEY) {
    throw new Error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }

  if (!folderLocation) {
    throw new Error("Please supply the path to a file or directory");
  }

  const storage = new Web3Storage({ token: WEB3_STORAGE_API_KEY });
  const files = await getFilesFromPath(folderLocation);

  console.log(`Uploading ${files.length} files`);
  const cid = await storage.put(files);
  console.log("Content added with CID:", cid);
  return cid;
}
