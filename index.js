// import { ethers } from "./ethers";
import { ethers } from "./ethers.js";

const connectBtn = document.getElementById("connectBtn");
const fundBtn = document.getElementById("fundBtn");
connectBtn.onclick = connect;
fundBtn.onclick = fund;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectBtn.innerHTML = "Connected!";
  } else {
    fundBtn.innerHTML = "Connected!";
  }
}

async function fund(ethAmount) {
  console.log(`funding ${ethAmount}`);
  if (typeof window.ethereum !== "undefined") {
    // provider / connection to the blockchain
    // signer / wallet / someone with gas
    // contract that we are interaction with
    // ^ ABI and address

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.signer();
  }
}
