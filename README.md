# Proof of Sweat - NFT Gym Pass

![Screenshot 2024-09-08 at 6 50 56 PM](https://github.com/user-attachments/assets/113140e6-8c91-438e-9256-6ff63d791b12)
![Screenshot 2024-09-08 at 6 51 07 PM](https://github.com/user-attachments/assets/814fb3ee-2108-48d5-afa9-4da4566791ad)
![Screenshot 2024-09-08 at 6 51 21 PM](https://github.com/user-attachments/assets/94d4354c-a736-4b14-9cb4-d4dc6c9a18fe)


**Proof of Sweat** is a decentralized app (dApp) that allows users to mint **Gym Badge NFTs** based on their workouts, creating a unique and verifiable record of their fitness journey on the blockchain. By leveraging the power of **Next.js**, **Solidity**, and **ethers.js**, we've created a streamlined, fully decentralized app that connects with MetaMask and mints workout-specific NFTs.

## Features

- **Next.js Frontend:** We chose **Next.js** for its flexibility and efficiency in building modern, scalable web applications. This helped us deliver a seamless user experience in a short time.
  
- **TailwindCSS for Styling:** The app's frontend uses **TailwindCSS** for rapid and responsive styling, making it easy to ensure a modern UI without writing custom CSS from scratch.

- **ERC-721 Smart Contract:** We implemented a custom **ERC-721 smart contract** in **Solidity** to mint unique Gym Badge NFTs for each workout type (weightlifting, cardio, yoga, etc.). The smart contract is deployed on the **Ethereum Sepolia testnet**.

- **ethers.js for Wallet Interactions:** Using **ethers.js**, users can connect their **MetaMask** wallet and mint NFTs directly from their browser, eliminating the need for traditional authentication and making the experience fully decentralized.

- **Dynamic Minting Process:** Each workout type generates a unique visual Gym Badge, turning the user's NFT collection into a personalized record of their fitness achievements. 

- **IPFS for Data Storage:** We used **IPFS** to securely store and manage the metadata and images related to the minted NFTs, ensuring a decentralized and resilient infrastructure for data storage.

## Tech Stack

- **Frontend:** Next.js, TailwindCSS, Typescript, reactquery
- **Smart Contract:** Solidity, ERC-721
- **Blockchain Interaction:** ethers.js, MetaMask,wagmi,web3modal
- **Storage:** IPFS
- **Network:** Ethereum Sepolia Testnet

## How It Works

1. **Connect Your MetaMask Wallet**

   Launch the app and connect your MetaMask wallet. Make sure you are connected to the Ethereum Sepolia testnet.

2. **Select Workout Type**

   Choose the type of workout you are interested in, such as weightlifting, cardio, or yoga.

3. **Mint Your NFT**

   Mint a personalized Gym Badge NFT by submitting your workout choice. This creates a unique NFT representing your fitness activity.

4. **View and Manage NFTs**

   After minting, view your NFT in your MetaMask wallet or on NFT platforms like OpenSea. You can also transfer or gift your NFTs to others through MetaMask.




