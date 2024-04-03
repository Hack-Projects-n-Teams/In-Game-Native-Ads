// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameHolders is ERC721URIStorage, Ownable{  

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
    
    constructor() Ownable(msg.sender) ERC721("NativeCreative Holder Token", "NCHT") {}

}