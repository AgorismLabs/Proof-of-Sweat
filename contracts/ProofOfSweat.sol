// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfSweat is ERC721URISTORAGE, Ownable {
    unit256 public tokenCounter;

    constructor() ERC721("ProofOfSweat", "POS") {
        tokenCounter = 0;
    }

    function mintBatch(address to, string memory tokenURI) public onlyOwner {
        _safeMint(to, tokenCounter);
        _setTokenURI(tokenCounter, tokenURI);
        tokenCounter++;
    }
}
