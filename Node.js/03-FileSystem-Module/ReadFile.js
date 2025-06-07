// readFile():
// Two type ki readFile ho hain.
// 1. readFileSync()
// 2. readFile()

// 1.readFileSync() :
// → readFileSync Synchronous data ko read karti hain.
// → fs.readFileSync method 2 arguments leta hai:
// 1.path (required): konsi file read karvani hain wo.
// 2.options (optional): Yeh object ya string ho sakta hai jo encoding ya flag specify karta hai.
Example:
const fs = require('fs');
const data = fs.readFileSync("./files/info.txt", { encoding: "utf-8" });
console.log("data", data);

// readFile() :
// → fs.readFile method 3 arguments leta hai:
// → 1. konsi file read karvani hain wo path.
// path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.callback (required): Yeh ek function hota hai jo do arguments leta hai: error (agar koi error hoti hai) aur data (jo file ka content hota hai).
// 3. options (optional): Yeh object ya string ho sakta hai jo encoding specify karta hai. Agar nahi diya gaya, toh default value 'null' hoti hai.
Example:
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
// fs.readFile("./files/info.txt", { encoding: "utf-8" }, (error, data) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("data", data);
// });