// ✰ res.sendFile():
// Inka use kisi bhi file ko responce me bhejne ke liye hota hain.
// Yeh method particularly useful hota hai jab tumhe static files jaise HTML, images, PDFs, etc. ko serve karna ho.
// serve - "Serve" ka matlab hai koi service provide karna ya kisi ko madad karna.
Example:
const express = require("express");
const path = require("path");
const server = express();

server.use(express.static("pages")); // external jo file hain unka route nahi define karna padta hain. isi liye inka use karte hain.

server.get("/", (req, res) => {
res.status(200);
res.sendFile(path.join(__dirname, "pages", "index.html"));
OR;
res.status(200).sendFile(path.join(__dirname, "pages", "index.html"));
});

// sendFile se aap Absolute path hi access kar sakte ho.
// path.join(__dirname, 'pages', 'index.html') ka use karke file ka absolute path specify karte hain.

server.use(express.static("pages")); //  ye line smajte hain.
// aapko static file ko use karna hain inka matlab wesa hota hain.
// pages folder ke inder jitni bhi file ongi wo automatic access kar lenga.
// jaise ki index.html file ke sath index.css & index.js file connect hain.
// to aapko index.css & index.js file ka route define nahi karna padta hain.