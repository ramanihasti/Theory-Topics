// rmdir() :
// rmdir() aap apni application me se folder ko delete kar sakte ho.
// two types hain.
// 1.rmdirSync()
// 2.rmdir()

// 1.rmdirSync()
// → rmdirSync() synchoronons folder ko delete karne deta hain.
// Yeh 2 arguments leta hai:
// 1.path (required): Yeh string ya Buffer object hota hai jo directory ka path define karta hai.
// 2.options (optional): Yeh object hota hai jo options specify karta hai, jaise recursive: true agar nested directories ko bhi delete karna ho. Default is { recursive: false }.
Example:
const fs = require("fs")
fs.rmdirSync("./files/backup");

// 2.rmdir():
// → rmdirSync() Asynchoronons folder ko delete karne deta hain.
// → Yeh 3 arguments leta hai:
// 1.path (required): Yeh string ya Buffer object hota hai jo directory ka path define karta hai.
// 2.options (optional): Yeh object hota hai jo options specify karta hai, jaise recursive: true agar nested directories ko bhi delete karna ho. Default is { recursive: false }.
// 3.callback (required): Yeh function hota hai jo error handling aur completion callback ke liye use hota hai.
Example:
const fs = require("fs")
fs.rmdir("./files/backup", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("File deleted!");
});