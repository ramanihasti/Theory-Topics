// 01. Readable Streams:
// → data ko chote chote chunks me read karne ke liye use karte hain.
// sabse se pahle fs module ko import karna padta hain.

// ✰ fs.createReadStream() method kyu use karte hain?
// → file ko asynchronously read karne ke liye use hota hai.

// ⚝ fs.createReadStream() :
// → fs(file system) aapko ek createReadStream() function deta hain.
// → readable stream ko sabse pahle create karna padta hain.
// → fs.createReadStream() function 2 argument leta hain:
// 1.path (required): Yeh string ya Buffer object hota hai jo file ka path specify karta hai.
//   - konsi file read karvani hain wo path.
// 2.options (optional): Yeh object hota hai jo different options specify karta hai jaise:
//     - encoding: File encoding (e.g., 'utf8').
//     - start: File me start position (bytes).
//     - end: File me end position (bytes).
//     - highWaterMark: Maximum number of bytes to read at a time.
Example: const fs = require("fs");
const readStream = fs.createReadStream(
  "./files/users/user.json",
  { encoding: "utf-8" },
  { highWaterMark: 16 }
);

// ⚝ readableStream.on() (Event Listener) :
// → .on() karke aapko ek function milta hain.
// → .on() function ek Event trigger karta hain.
// → Events: Stream events jaise 'data', 'end', aur 'error' ko handle karte hain.
//      - data Event: Stream se data chunks read karta hai.
//      - end Event: Reading complete hone par trigger hota hai.
//      - error Event: Koi issue hone par error ko handle karta hai.
Example:
readStream.on("data", (chunk) => {
  console.log("Data:", chunk);
});
// Jab bhi stream se data ka ek chunk read hota hai, data event trigger hota hai.
// Listener function har data chunk ko process karta hai aur console par print karta hai.
// chunk stream se aaya hua data hota hai.
readStream.on("end", () => {
  console.log("Reading Complate!");
});
// Jab poora data read ho jata hai aur stream end ho jati hai, end event trigger hota hai.
// Listener function reading completion ka message console par print karta hai.
readStream.on('error', (err) => {
    console.error('Error:', err);
  });
//   Agar stream me koi error aati hai, error event trigger hota hai.
//   Listener function error message ko console par print karta hai.

// Pura Example :
const fs = require("fs");
const readableStream = fs.createReadStream(
    "./files/users/user.json",
    { encoding: "utf-8" },
    { highWaterMark: 16 }
  );
  readableStream.on("data", (chunk) => {
    console.log("Data:", chunk);
  });
  
  readableStream.on("end", () => {
    console.log("Reading Complate!");
  });
  
  readableStream.on('error', (err) => {
      console.error('Error:', err);
    });