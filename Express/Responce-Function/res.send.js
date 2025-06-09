// ✰ res.send() :
// Express.js me res.send method ka use HTTP response bhejne ke liye hota hai.
// Yeh method response ko client tak bhejta hai. 

Example:
const express = require('express');
const app = express();
// Route define karo
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Server ko listen karo
app.listen(port, () => {
  console.log(`Server running at http://localhost:5000/`);
});

// res.send: Response ko client tak bhejne ke liye use hota hai.
// Simple text: Text, HTML, ya JSON data send kar sakte ho.
// Automatic headers: res.send automatically response headers set karta hai.

// contect-type ye sab automatic set ho jata hain.
// aapko kuch karne ki zarur nahi hain.

// unme status code set karke nahi aata hain.
// agar aapko set karna hain to res.status karke set kar sakte ho.
// unke 2 tarike hain.
server.get("/", (req, res) => {
res.status(200);
res.send("<h1>Hello World!</h1>");
OR;
res.status(200).send("<h1>Hello World!</h1>");
});
// sath me kar sakte ho agar alag bhi define kar sakte ho.