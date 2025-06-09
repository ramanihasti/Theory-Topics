// ✰ res.download():
// inka use karke aap client ke PC me file ko download kar sakte ho.

// ⚝ kese file ko download kar sakte hain?
// → jab bhi client url pe jayenga tab unke PC, computer, laptop me aapne jo file di hain wo dowmload ho jayengi.
syntax:
res.download(filePath, callback);
// 1. filepath(require): konsi file download karvani hain wo file ka path.
// 2. callback(optional) : function to call on error or completion.
Example:
const express = require("express");
const server = express();

server.get("/" , (req , res) => {
    res.download("./info.txt" , (err) => {
        if (err) {
            console.error('Error during file download:', err);
          } else {
            console.log('File download initiated successfully.');
          }
    });
});
server.listen(5000, () => {
    console.log("server live in port 5000!");
  });

// res.download(filePath, callback) ka use karke file ko client side download ke liye send karte hain.