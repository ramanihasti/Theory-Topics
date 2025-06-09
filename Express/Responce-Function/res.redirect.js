// ✰ res.redirect() :
// inka use karke aap client ko direct jis bhi route par mokalna hain.
// waha par bhej sakte ho.

syntax: res.redirect([status], path);
// 1. status: Optional HTTP status code (default is 302).
// 2. path: URL to redirect to.

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.redirect("/about");
});
server.listen(5000, () => {
  console.log("server live in port 5000!");
});
