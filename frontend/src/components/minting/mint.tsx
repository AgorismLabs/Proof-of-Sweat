"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mint = () => {
  const [inputData, setInputData] = useState<string>("");
  const [minted, setMinted] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [nftSent, setNftSent] = useState<boolean>(false); // when nft is sent it will replace the input and button with the text "nft sent"

  const handleMintNFT = () => {
    if (!inputData) {
      toast.error("Please enter the text!");
      return;
    }
    setMinted(true);
    toast.success("NFT minted successfully");
  };

  const handleSendNFT = () => {
    if (!walletAddress) {
      toast.error("Please enter a wallet address!");
      return;
    }

    // Logic to send the NFT to the entered wallet address
    setNftSent(true); // Set state to show success message
    toast.success("NFT sent to wallet address!");

    // window.location.reload();
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
            <input
              type="text"
              placeholder="Enter text here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="w-full px-10 py-3 rounded-md bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-5 text-lg "
            />

            <div className="flex justify-center mt-10 ">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={handleMintNFT}
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
