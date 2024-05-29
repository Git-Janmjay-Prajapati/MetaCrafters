/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let nftcollection = [];
function mintNFT(name,unique_Id,birth_place,month,year){
    const nft = {
       name : name,
       unique_Id : unique_Id,
       birth_place : birth_place,
       month : month,
       year : year
    };
    nftcollection.push(nft);
 }

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function ListNFTs(){
    for(let i =0;i<nftcollection.length;i++){
       
       console.log("\ndetails:")
       console.log("\nname \t\t :" + nftcollection[i].name);
       console.log("unique Id\t :" + nftcollection[i].unique_Id);
       console.log("birth place \t:" + nftcollection[i].birth_place);
       console.log("month\t\t :" + nftcollection[i].month);
       console.log("year \t\t:" + nftcollection[i].year);
    
    }
 }
 

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
    return nftcollection.length;
 }

// call your functions below this line
mintNFT("Janmjay Prajapati",10169,"Jharkhand","march",2002);
mintNFT("Mayank Sharma",10182,"Bihar","September",2004);
mintNFT("Goblin",10200,"Uttar Pradesh","July",2004);
mintNFT("Aashutosh",10228,"Jharkhand","February",2003);

ListNFTs();
getTotalSupply();
