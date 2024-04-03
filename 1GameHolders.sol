// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    // create a struct for the Holder data
    struct HolderDatainfo {
        uint256 gameID;
        uint256 gameClientHolderID;
        uint256 totalCampaigns;
        uint256 activeCampaigns;
        uint256 users;
        uint256 views;
        uint256 leads;
        bool paused;
    }

    // create a struct for the Game data
    struct GameDatainfo {
        address owner;
        address gameServerAddress;
        uint256 totalHolders;
        uint256 activeHolders;
        uint256 totalCampaigns;
        uint256 activeCampaigns;
        uint256 users;
        uint256 views;
        uint256 leads;
        bool paused;
    }

    uint256 private _nextTokenId;

    // Game mappings
    mapping(uint256 => GameDatainfo) public _games;
    mapping(uint256 => uint256) public _gameRevenues;
    mapping(uint256 => uint256) public _gameBalances;

    // Holder mappings
    mapping(uint256 => HolderDatainfo) public _holders;
    mapping(uint256 => uint256) public _holderRevenues;
    
    constructor() Ownable(msg.sender) ERC721("NativeCreative Holder Token", "NCHT") {}
    
    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
