"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import Contract from "../../../../artifacts/contracts/ProofOfSweat.sol/ProofOfSweat.json";
import { useAccount } from "wagmi";
import { Circles } from 'react-loader-spinner'; // Import Circles spinner

const Mint = () => {
  const [workoutType, setWorkoutType] = useState<string>("");
  const [minted, setMinted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // New loading state
  const { isConnected } = useAccount(); // to track wallet connection status

  const contractAddress = "0xEf164085E4552dEf095284F77d9eE5aFf95671D2";
  const workoutOptions:any = {
    Weightlifting:
      "https://gateway.pinata.cloud/ipfs/QmepHe3TSXKw2LA9WnBaE9PpfSVEXLMB9jXG5Ang7f8zWJ",
    Cardio: "https://gateway.pinata.cloud/ipfs/QmX9dJMzwgpD7WZCgmLprXki2aPTEEXEYz4E3QBnFTR3Sy",
    HIIT: "https://gateway.pinata.cloud/ipfs/QmPncNeJeHTjuCAaozmgYFXEXqJeQ5G57F4tcnApgDwBfT",
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

    try {
      setLoading(true); // Start loading
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const myNftContract = new ethers.Contract(
        contractAddress,
        Contract.abi,
        signer
      );

      const tokenURI = workoutOptions[workoutType];
      const nftTxn = await myNftContract.mintBadge(await signer.getAddress(), tokenURI);
      await nftTxn.wait();

      toast.success("NFT Minted Successfully!");
      setMinted(true); // Mark as minted
    } catch (error) {
      console.error("Error minting NFT:", error);
      toast.error("Error minting NFT.");
    } finally {
      setLoading(false); // End loading
    }
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
              className="mb-5 w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         rounded-lg focus:border-purple-300 focus:ring-2 focus:ring-purple-300 
                         transition-all duration-300 shadow-lg focus:outline-none"
            >
              <option value="" className="text-gray-300">Select Workout</option>
              {Object.keys(workoutOptions).map((workout) => (
                <option key={workout} value={workout} className="text-black">
                  {workout}
                </option>
              ))}
            </select>

            <div className="flex justify-center mt-10">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={mintNFT}
                  disabled={loading} // Disable button while loading
                  className={`relative inline-flex items-center justify-center border border-gray-500 px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Minting..." : "MINT NFT"}
                </button>
              </div>
            </div>

            {/* Show loader while loading */}
            {loading && (
              <div className="mt-8 flex justify-center">
                <Circles
                  height="40"
                  width="40"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  visible={true}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-lg font-semibold text-green-500">
            NFT Minted! Now import it on your wallet or check on OpenSea.
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint;
