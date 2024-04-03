// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CreativeCampaigns is ERC721URIStorage, Ownable{
    
    // create a struct for the campaign data
    struct CampaignDatainfo {
        address campaignOwner;
        string campaignURL;
        uint256 totalCreatives;
        uint256 activeCreatives;
        uint256 totalGames;
        uint256 activeGames;
        bool paused;
        uint256 totalViews;
        uint256 totalLeads;
    }
    
    // create a struct for the campaign data
    struct CreativeDatainfo {
        uint256 campaignID;
        uint256 gameID;
        uint256 holderID;
        uint256 gameClientHolderID;
        uint256 totalViews;
        uint256 totalLeads;
        bool paused;
        string creativeURL;
    }

    // Campaign mappings
    mapping(uint256 => CampaignDatainfo) public _campaigns;
    mapping(uint256 => uint256) public _campaignBalances;
    mapping(uint256 => uint256) public _campaignExpenses;
    
    // Creatives mappings
    mapping(uint256 => CreativeDatainfo) public _creatives;
    mapping(uint256 => uint256) public _creativesExpenses;

    // TODO Campaigns functions
    // TODO Creatives functions

    event ViewOccurred(uint256 _campaigns);
    constructor(address initialOwner) Ownable(initialOwner) ERC721("Campaign NFT", "CNFT") ERC721URIStorage() {
        // TODO Campaign ID - start numeration from 1.
        _campaigns[1].totalViews = 1;
        
    }

    function pauseCampaign(uint256 _campaignID) public {
        _campaigns[_campaignID].paused = true;  
    }

    function unpauseCampaign(uint256 _campaignID) public {
        _campaigns[_campaignID].paused = false;
    }

    function campaignPaused(uint256 _campaignID) public view returns (bool){
        return _campaigns[_campaignID].paused == true;
    }

    function viewCampaign(uint256 _campaignID) public returns (CampaignDatainfo memory) {
        //Increase view count
        _campaigns[_campaignID].totalViews++;
        emit ViewOccurred(_campaignID);
        //View Campaign
        return _campaigns[_campaignID];
    }

   
    function addTotalGames(uint256 _campaignID, uint256 value) public {
        _campaigns[_campaignID].totalGames += value;
    }

    function getTotalGames(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].totalGames;
    }

    function addActiveGames(uint256 _campaignID, uint256 value) public {
        _campaigns[_campaignID].activeGames += value;
    }

    function getActiveGames(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].activeGames;
    }

    function addCreativies(uint256 _campaignID, uint256 value) public returns (uint256){
       return _campaigns[_campaignID].totalCreatives += value;
    }

    function getTotalCreatives(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].totalCreatives;
    }

    function addActiveCreativies(uint256 _campaignID, uint256 value) public returns (uint256) {
        return _campaigns[_campaignID].activeCreatives += value;
    }

    function getActiveCreatives(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].activeCreatives;
    }
    
    function addTotalHolders(uint256 _campaignID, uint256 value) public returns (uint256) {
        return _campaigns[_campaignID].totalHolders += value;
    }

    function getTotalHolders(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].totalHolders;
    }

    function updateCampaign(uint256 _tokenId, string memory _data) external onlyOwner {
        require(_exists(_tokenId), "Campaign with given token ID does not exist");
        campaigns[_tokenId].data = _data;
    }

    function getCampaignViews(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].totalViews;
    }

    function getPromoCode(uint256 _campaignID) public view returns (string memory ) {
        return _campaigns[_campaignID].promoCode;
    }

    function getRedirectLink(uint256 _campaignID) public view returns (string memory ) {
        return _campaigns[_campaignID].redirectLink;
    }
    
    ERC721 public nftContract;

    // Event emitted when an NFT is minted
    event NFTMinted(address indexed owner, uint256 indexed tokenId, string tokenURI);

    event DataForTableland(uint indexed _campaignID, string _campaign);

    // Function to mint an NFT using ID and enum logos
    function newCampaignNFT(uint256 _campaignID) public {
        // Get campaign data
        CampaignDatainfo memory campaignInfo = _campaigns[_campaignID];

        
        
        // Mint NFT
        uint256 tokenId = campaignInfo.campaignID;
        _safeMint(msg.sender, tokenId); // Minting the NFT
        

        // Emit event
        emit NFTMinted(msg.sender, tokenId, ""); // Assuming the tokenURI is empty for now
    }

    //Push or stream data to tableland database        
    function storeData(uint _campaignID, string memory _campaignName) public {
        emit DataForTableland(_campaignID, _campaignName);
    }
        
    function viewTopUpBallance() public view returns(uint256) {
        return address(this).balance;
    }

    function withdrawBalance() public payable onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }    
}
