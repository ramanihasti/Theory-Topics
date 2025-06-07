// // writeFile():
// Two type ki writeFile ho hain.
// 1. writeFileSync()
// 2. writeFile()
!important
// writeFile & writeFileSync method aapko new file create karkenahii deta hain.
// already file create hongi to hi data write kerenga.
// writeFile & writeFileSync method aapka pehle vala jo data hain unko override kar denga.
// yani ki delete kar denga.appendFile me aesa nahi hota hain.

// 1.writeFileSync() :
// → writeFileSync Synchronous data ko write karti hain.
// → yani ki line by line code chalati hain.
// → already file create honi chahiye to bhi aap file me data ko write kar sakte ho.
// → fs.writeFileSync method 2 arguments leta hai:
// 1.path (required): konsi file write karvani hain wo.
// 2.data (required): Yeh data hota hai jo file me likha jana hai. Yeh string ya Buffer form me ho sakta hai.
// 3.options (optional): Yeh object ya string ho sakta hai jo encoding ya mode specify karta hai. Default is 'utf8'.
Example:
const fs = require('fs');
const data = fs.writeFileSync("./files/info.txt", "Hello World!" , {encoding : "utf-8"});
console.log("data", data);

// writeFile() :
// → writeFileSync Synchronous data ko write karti hain.
// → fs.writeFile method 4 arguments leta hai:
// → 1. konsi file read karvani hain wo path.
// path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.data (required): Yeh data hota hai jo file me likha jana hai. Yeh string ya Buffer form me ho sakta hai.
// 3.options (optional): Yeh object ya string ho sakta hai jo encoding ya mode specify karta hai. Default is 'utf8'.
// 4.callback (required): Yeh function hota hai jo error handling aur completion callback ke liye use hota hai.
Example:
const fs = require('fs');

fs.writeFile("./files/infoNew.txt", "Hello World!",{encoding: "utf8"}, (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("Write sucessful!");
});