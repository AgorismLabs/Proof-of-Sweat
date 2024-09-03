"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers, BrowserProvider, AbiCoder } from "ethers";

const Mint = () => {
  const [inputData, setInputData] = useState<number>();
  const [minted, setMinted] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [nftSent, setNftSent] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false); // New state to track processing

  const CONTRACT_ADDRESS = "0xD30C778F7Fd47CCfB93Caa589195eb288FC768c8";
  const provider = new BrowserProvider(window.ethereum);
  const signer = provider.getSigner();

  const requestAccount = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error("User rejected the request or there was an error", error);
      toast.error("Please authorize the application to access your account.");
    }
  };

  // Call this function when you need to request access
  requestAccount();
  const handleMintNFT = async () => {
    if (!inputData) {
      toast.error("Please enter the text!");
      return;
    }

    try {
      setIsProcessing(true); // Set processing state to true
      // Encrypt the private data
      const abiCoder = new AbiCoder();
      const encryptedData = abiCoder.encode(["uint256"], [inputData]);

      // Encode the function call
      const iface = new ethers.Interface([
        "function mint(address to, uint256 tokenId, bytes calldata privateData)",
      ]);
      const data = iface.encodeFunctionData("mint", [
        await (await signer).getAddress(),
        1,
        encryptedData,
      ]);

      // Send the transaction
      const tx = await (
        await signer
      ).sendTransaction({
        to: CONTRACT_ADDRESS,
        data: data,
      });
      console.log(`Transaction Hash: ${tx.hash}`);
      await tx.wait();
      setMinted(true);
      toast.success("NFT minted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error minting NFT");
    } finally {
      setIsProcessing(false); // Reset processing state
    }
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
        {isProcessing ? ( // Show loading state if processing
          <div className="text-lg font-semibold text-yellow-500">
            Processing NFT minting...
          </div>
        ) : !minted ? (
          <>
            <input
              type="text"
              placeholder="Enter text here"
              value={inputData}
              onChange={(e) => setInputData(Number(e.target.value))}
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
