"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function Home() {
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="bg-gradient-to-b from-gray-900 to-black  px-20 py-20 rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center tracking-widest">
          Proof Of Sweat 
        </h1>
        <div className="flex justify-center mb-6">
          <w3m-button />
        </div>
        <div className="flex justify-center space-x-4">
          {address && (
            <button
              onClick={() => disconnect()}
              className="bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform"
            >
              Disconnect
            </button>
          )}
        </div>
        <div className="mt-8 text-center">
          <div className="text-white text-xl">
            {address ? address : "Not Connected"}
          </div>

          {address && (
            <div className="relative inline-flex group mt-10">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button
                onClick={() => router.push("/mintpage")}
                className="relative inline-flex items-center justify-center border border-gray-500 px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                MINT NFT NOW !!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
