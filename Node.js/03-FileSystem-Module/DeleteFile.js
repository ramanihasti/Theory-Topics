// unlink():
// unlink() ka use karke aap apne folder me se koi bhi file ko delete kar sakte ho.
// two types hain.
// 1.unlinkSync()
// 2.unlink()

// 1.unlinkSync()
// → unlinkSync method hame Synchronons file ko delete karne deta hain.
// → Yeh 2 arguments leta hai:
// 1.path (required):konsi file delete karni hain wo. Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.options (optional): Yeh options object hai, lekin generally unlinkSync options nahi leta.
Example:
const fs = require("fs")
fs.unlinkSync("./files/infoBackup.txt");

// 2.unlink()
// → unlinkSync method hame Asynchronons file ko delete karne deta hain.
// → Yeh 3 arguments leta hai:
// 1.path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.callback (required): Yeh function hota hai jo error handling aur completion ke liye use hota hai.
// 3.options: Nahin leta.
Example:
const fs = require("fs")
fs.unlink("./files/infoBackup.txt", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("File deleted!");
});