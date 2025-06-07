// mkdir() :
// fs.mkdir method Node.js me directories (folders) create karne ke liye use hota hai.
// Two type ki writeFile ho hain.
// 1. mkdirSync()
// 2. mkdir()

// 1.mkdirSync()
// → mkdirSync() Synchronous folder create karne deta hain.
// → Yeh method 3 arguments leta hai:
// Yeh 2 arguments leta hai:
// 1.path (required):konsa folder create karna hain wo path. Yeh string hota hai jo directory ka path define karta hai.
// 2.options (optional): Yeh object hota hai jo directory creation ke options specify karta hai, jaise recursive: true agar nested directories banana ho.
const fs = require("fs");
fs.mkdirSync("./files/backup");
// aapke files name ke folder me ek new folder create hoo jayega backup.

// 1.mkdir()
// → mkdir() Asynchronous folder create karne deta hain.
// yeh 3 arguments leta hai:
// 1.path (required): Yeh string hota hai jo directory ka path define karta hai.
// 2.options (optional): Yeh object hota hai jo directory creation ke options specify karta hai, jaise recursive: true agar nested directories banana ho. Default is { recursive: false }.
// 3.callback (required for async): Yeh function hota hai jo error handling aur completion ke liye use hota hai.
const fs = require("fs");
fs.mkdir("./files/backup", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("Folder created!");
});
