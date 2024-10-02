
import axios from "axios";


const pinataApiUrl = "https://api.pinata.cloud/pinning/pinFileToIPFS";

const pinataHeaders = {
  headers: {
    "Content-Type": "multipart/form-data",
    pinata_api_key: "20590f71d91c2a149412",
    pinata_secret_api_key: "a39b1bfd49f0941632363c1bf54d91d297ae811c12c234e83aa2bee049064801",
  },
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
    const ipfsHash = response.data.IpfsHash;
    return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw error;
  }
}