import { uploadEncryptionIpfs, decryptFolderIpfs,   encryptFolder, decryptFolder, uploadToIpfs, downloadFile, } from "./index.js";

const WEB3_STORAGE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU5ODMzMDYwMjllNDQyNGM1MDg1NzUwNmM0MjY4MzhmOEUyMmUxMzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk3NTU2Mzc3NTAsIm5hbWUiOiJzdW1pdCJ9.hEzv-WkFKs6-nH0NoYKxACQFcOlg7mDNQqosVv2T2Nk"
const run = async () => {
  const cid = await uploadEncryptionIpfs(
    WEB3_STORAGE_API_KEY,
    "./test_files/",
    "password"
  );
  console.log(cid);
};
// run();

const decrypt = async()=>{
  const res = await decryptFolderIpfs(
    WEB3_STORAGE_API_KEY,
    "bafybeibzzmlnwe64s2wb3gh7pkwl3knmipstol5u4xsvvqq2hyeza5jvfe",
    "password",
    "./"
  );
}
decrypt();

// const dcrpt = async()=>{
//   const _ = await decryptFolder("./","password");
//   console.log(_);

// }
// // dcrpt();