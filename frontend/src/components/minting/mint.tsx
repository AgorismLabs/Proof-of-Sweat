"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import Contract from "../../../../artifacts/contracts/ProofOfSweat.sol/ProofOfSweat.json";
import { useAccount } from "wagmi";

const Mint = () => {
  const [workoutType, setWorkoutType] = useState<string>("");
  const [minted, setMinted] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [nftSent, setNftSent] = useState<boolean>(false); // when NFT is sent, it will replace the input and button with the text "NFT sent"
  const { isConnected } = useAccount(); // to track wallet connection status

  const contractAddress = "0xEf164085E4552dEf095284F77d9eE5aFf95671D2";
  const workoutOptions = {
    Weightlifting:
      "https://gateway.pinata.cloud/ipfs/QmepHe3TSXKw2LA9WnBaE9PpfSVEXLMB9jXG5Ang7f8zWJ",
    Cardio: "ipfs://Qm.../cardio.png",
    HIIT: "ipfs://Qm.../hiit.png",
  };

  // Mint NFT function
  const mintNFT = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet.");
      return;
    }

    if (!workoutType) {
      toast.error("Please select a workout type.");
      return;
    }

    console.log("clicked")

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const myNftContract = new ethers.Contract(
        contractAddress,
        Contract.abi,
        signer
      );

      const tokenURI ="https://gateway.pinata.cloud/ipfs/QmepHe3TSXKw2LA9WnBaE9PpfSVEXLMB9jXG5Ang7f8zWJ"
      const nftTxn = await myNftContract.mintBadge(await signer.getAddress(), tokenURI);
      await nftTxn.wait();

      toast.success("NFT Minted Successfully!");
      setMinted(true); // Mark as minted
      console.log(
        `NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`
      );
    } catch (error) {
      console.error("Error minting NFT:", error);
      toast.error("Error minting NFT.");
    }
  };

  const handleSendNFT = () => {
    if (!walletAddress) {
      toast.error("Please enter a wallet address!");
      return;
    }

    // Logic to send the NFT to the entered wallet address (custom logic needed)
    setNftSent(true); // Set state to show success message
    toast.success("NFT sent to wallet address!");
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center min-h-screen text-white">
      <ToastContainer />

      <h1 className="text-6xl font-extrabold mb-10 drop-shadow-lg">
        Mint <span className="text-gradient">NFT</span>
      </h1>
      <div className="bg-gradient-to-b from-gray-900 to-black p-40 rounded-lg shadow-2xl flex flex-col items-center">
        {!minted ? (
          <>
            <select
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              className="mb-5 text-black"
            >
              <option value="">Select Workout</option>
              {Object.keys(workoutOptions).map((workout) => (
                <option key={workout} value={workout}>
                  {workout}
                </option>
              ))}
            </select>

            <div className="flex justify-center mt-10">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={mintNFT}
                  className="relative inline-flex items-center justify-center border border-gray-500 px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  MINT NFT
                </button>
              </div>
            </div>
          </>
        ) : !nftSent ? (
          <>
            <input
              type="text"
              placeholder="Enter wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-10 py-3 rounded-md bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-5 text-lg"
            />
            <button
              onClick={handleSendNFT}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 rounded-md shadow-md transition duration-300"
            >
              Send NFT
            </button>
          </>
        ) : (
          <div className="text-lg font-semibold text-green-500">
            NFT sent to the wallet address!
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint;
