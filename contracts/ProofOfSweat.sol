// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfSweat is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("ProofOfSweat", "POS") Ownable(msg.sender) {
        tokenCounter = 0;
    }

    function mintBadge(address to, string memory tokenURI) public onlyOwner {
        _safeMint(to, tokenCounter);
        _setTokenURI(tokenCounter, tokenURI);
        tokenCounter++;
    }
}
