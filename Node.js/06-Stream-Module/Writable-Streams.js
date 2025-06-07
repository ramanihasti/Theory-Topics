// 02. Writeable Streams:
// → data ko chote chote chunks me write karne ke liye use karte hain.
// → sabse se pahle fs module ko import karna padta hain.

// ✰ fs.createWriteStream() method kyu use karte hain?
// → file ko asynchronously write karne ke liye use hota hai.

// ⚝ fs.createWriteStream() :
// → fs(file system) aapko ek createWriteStream() function deta hain.
// → writeable stream ko sabse pahle create karna padta hain.
// → fs.createWriteStream() function 2 argument leta hain:
// 1.path (required): Yeh string ya Buffer hota hai jo file ka path specify karta hai.   
        // Example: example.txt.
// 2. options (optional): Yeh object hota hai jo different options specify karta hai, jaise:
//      - flags: File system flags. Default is 'w' for writing.
//     ⚝- encoding: File encoding, jaise 'utf8'. 
//      - fd: File descriptor ke sath stream ko attach karta hai.
//      - mode: Permissions, default is 0o666.
//      - autoClose: Automatically file close karta hai, default is true.
//     ⚝- highWaterMark: Internal buffer ke max bytes, default is 16 * 1024.
Example:
const writeableStream = fs.createWriteStream(
  "./files/info.txt",
  { encoding: "utf-8" },
  { highWaterMark: 16 }
);
writeableStream.write("My name is Ramani Hasti Himmatbhai.");

// ⚝ writeableStream.on() (Event Listener) :
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
// Jab bhi stream se data ka ek chunk write hota hai, data event trigger hota hai.
// Listener function har data chunk ko process karta hai aur console par print karta hai.
// chunk stream se aaya hua data hota hai.
writableStream.end();
writableStream.on('finish', () => {
    console.log('Writing completed.');
  });
//   Jab stream me writing complete hoti hai aur stream close hoti hai, finish event trigger hota hai.
//   Listener function completion ka message console par print karta hai.
writableStream.on('error', (err) => {
    console.error('Error:', err);
  });
// Agar stream me koi error hota hai, error event trigger hota hai.
// Listener function error message ko console par print karta hai.

// pura Example:
const writableStream = fs.createWriteStream(
    "./files/info.txt",
    { encoding: "utf-8" },
    { highWaterMark: 16 }
  );
  writableStream.write("My name is Ramani Hasti Himmatbhai.");
  writableStream.on("data", (chunk) => {
    console.log("data:", chunk);
  });
  writableStream.end();
  writableStream.on("finish", () => {
    console.log("Writing completed.");
  });
  writableStream.on("error", (err) => {
    console.error("Error:", err);
  });