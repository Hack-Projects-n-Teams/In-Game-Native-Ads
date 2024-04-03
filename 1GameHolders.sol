// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameHolders is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextGameId;
    uint256 private _nextHolderTokenId;
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

    // Game mappings
    mapping(uint256 => GameDatainfo) public _games;
    mapping(uint256 => uint256) public _gameRevenues;
    mapping(uint256 => uint256) public _gameBalances;

    // Holder mappings
    mapping(uint256 => HolderDatainfo) public _holders;
    mapping(uint256 => uint256) public _holderRevenues;
    
    // Game events
    event GameAdded(uint256 indexed gameId, address indexed owner, address indexed gameServerAddress);
    
    
    constructor() Ownable(msg.sender) ERC721("NativeCreative Holder Token", "NCHT") {}
    
    function safeHolderMint(address to, string memory uri) public {
        uint256 holderTokenId = _nextHolderTokenId++;
        _safeMint(to, holderTokenId);
        _setTokenURI(holderTokenId, uri);
    }

    //Game Functions
    function addGame(address _gameServerAddress, string memory _name, string memory _prompt) public {
        uint256 gameId = _nextGameId++;

        _games[gameId].owner = msg.sender;
        _games[gameId].gameServerAddress = _gameServerAddress;

        // TODO write to table land 

        emit GameAdded(gameId, msg.sender, _gameServerAddress);
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
