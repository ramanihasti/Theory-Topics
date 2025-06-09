// ✰ res.sendStatus() :
// inka use karke aap only status code ka message kay hain wo dikha sakte ho.
// URL ke page pe.
// Yeh status code aur uske corresponding message ko client ko return karta hai.

// ⚝ kyu use karte hain?
// → res.sendStatus: HTTP status code ke sath response bhejne ke liye use hota hai.

syntax:
res.sendStatus(statusCode);
// statusCode: HTTP status code jo tumhe response me bhejna hai.

Example:
const express = require("express");
const server = express();

server.get("/", (req, res) => {
res.sendStatus(500);
});
server.listen(5000, () => {
    console.log("Server is listening on port 5000!");
  });

// Output:
// Internal Server Error