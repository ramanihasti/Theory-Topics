// appendFile():
// // Two type ki appendFile ho hain.
// 1. appendFileSync()
// 2. appendFile()
!important;
// appendFileSync & appendFile method agar aapke folder me wo file nahi hongi to wo create kar denga.
// or bad me wo file me data write karenga.
// agar already file create hain to wo file create nahi karenga. wo file me hi data ko write kar denga.

// 1. appendFileSync()
// → appendFileSync Synchronous data ko write karti hain.
// → yani ki line by line code chalati hain.
// → appendFileSync() method agar aapke folder me wo file nahi hongi to wo create kar denga.
// Yeh method 3 arguments leta hai:
// 1.path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.data (required): Yeh data hota hai jo file me append kiya jana hai. Yeh string ya Buffer form me ho sakta hai.
// 3.options (optional): Yeh object ya string ho sakta hai jo encoding ya mode specify karta hai. Default is 'utf8'.
Example:
const fs = require("fs");
console.log(1);
const data = fs.appendFileSync("./files/info.txt", "\nNew Content!");
console.log(2)
console.log("data" , data);
console.log(3);
// output:
// 1
// 2
// data
// 3

// 2.appendFile()
// → appendFileSync Asynchronous data ko write karti hain.
// → appendFileSync() method agar aapke folder me wo file nahi hongi to wo create kar denga.
// Yeh method 4 arguments leta hai:
// 1. path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.data (required): Yeh data hota hai jo file me append kiya jana hai. Yeh string ya Buffer form me ho sakta hai.
// 4.callback (required): Yeh function hota hai jo error handling aur completion callback ke liye use hota hai.
// 3.options (optional): Yeh object ya string ho sakta hai jo encoding ya mode specify karta hai. Default is 'utf8'.
Example:
const fs = require("fs");
console.log(1);
fs.appendFile("./files/info.txt", "\nNew Content!", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
console.log(2);
  console.log("Append completed!");
});
console.log(3);
// output:
// 1
// 3
// 2
// Append completed!

// Asynchronous me sabse pahle pehli line chalegi.
// unke bad second line chalegi ti unme appenFIle ka function hain unme time lagta hain isi liye javascript wo worker thread ko de ke nikal jayega.
// unke bad function ke bad ka code chalega.
