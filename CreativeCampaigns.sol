// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CreativeCampaigns is ERC721URIStorage, Ownable{
    
    // create a struct for the campaign data
    struct CampaignDatainfo {
        address campaignOwner;
        string campaignName;
        string campaignPrompt;
        uint256 campaignBalance;
        uint256 campaignExpense;
        uint256 campaignID;
        uint256 leads;
        string promoCode;
        string redirectLink;
        bool paused;
        uint256 activeGames;
        uint256 activeCreatives;
        uint256 totalGames;
        uint256 totalCreatives;
        uint256 totalHolders;
        uint256 totalViews;
    }

    mapping(uint256 => CampaignDatainfo) public _campaigns;

    mapping(uint256 => uint256) public campaignBalance;
    mapping(uint256 => uint256) public campaignExpense;
    

    event ViewOccurred(uint256 _campaigns);
    constructor(address initialOwner) Ownable(initialOwner) ERC721("Campaign NFT", "CNFT") ERC721URIStorage() {
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

    function updateCampaign(uint256 _tokenId, CampaignDatainfo memory newData) external onlyOwner {
        require(_campaigns[_tokenId].campaignOwner != address(0), "Campaign with given token ID does not exist");
        _campaigns[_tokenId] = newData;
    }

    function addCreativeViews(uint256 _campaignID, uint256 value) public returns (uint256) {
        return _campaigns[_campaignID].totalViews += value;
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

    function getLeads(uint256 _campaignID) public view returns (uint256) {
        return _campaigns[_campaignID].leads;
    }
    
    function addCreativeLeads(uint256 _campaignID, uint256 value) public returns (uint256) {
        return _campaigns[_campaignID].leads += value;
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
