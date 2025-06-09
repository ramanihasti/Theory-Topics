//✰ res.json() :
// → APIs banane me kaafi useful hota hai jo JSON data return karte hain.
// → API yani ki JSON data

// ✰ kyu res.json() ka use karte hain.
// → res.json: JSON format me response/answer bhejne ke liye use hota hai.

Advantages:
// Structured Data: Client ko structured/વ્યવસ્થિત/ગોઠવણેલ data bhejna easy hota hai.
// API Development: APIs banane me kaafi useful hota hai jo JSON data return karte hain.
// Ease of Use: Automatically headers set karta hai aur data ko JSON format me convert karta hai.
Example:
const express = require("express");
const path = require("path");
const server = express();

server.get("/", (req, res) => {
  res.status(200);
  res.json({ name: "Ram", roll: 10 });
  OR;
  res.status(200).json({ name: "Ram", roll: 10 });
});
server.listen(5000, () => {
    console.log("Server is listening on port 5000!");
  });

// output:
// {
//   "name": "Ram",
//   "roll": 10
// }
