# Proof of Sweat - NFT Gym Pass

![Screenshot 2024-09-08 at 6 50 56 PM](https://github.com/user-attachments/assets/113140e6-8c91-438e-9256-6ff63d791b12)
![Screenshot 2024-09-08 at 6 51 07 PM](https://github.com/user-attachments/assets/814fb3ee-2108-48d5-afa9-4da4566791ad)
![Screenshot 2024-09-08 at 6 51 21 PM](https://github.com/user-attachments/assets/94d4354c-a736-4b14-9cb4-d4dc6c9a18fe)


**Proof of Sweat** is a decentralized app (dApp) that allows users to mint **Gym Badge NFTs** based on their workouts, creating a unique and verifiable record of their fitness journey on the blockchain. By leveraging the power of **Next.js**, **Solidity**, and **ethers.js**, we've created a streamlined, fully decentralized app that connects with MetaMask and mints workout-specific NFTs.


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


## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with NFT GYM PAS, follow the steps below:

1. Clone this repo & install dependencies

```
git clone [https://github.com/scaffold-eth/scaffold-eth-2.git](https://github.com/AgorismLabs/agorismLabNFT.git)
cd agorismLabNFT
yarn install
```

2. Run the frontend

```
cd frontend
yarn install
yarn dev

