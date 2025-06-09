// ✰ Express :
// → express se aap easyly node.js ke web server ko create kar sakte ho.
// → mainly hum Express ka use API banane me karenge.
// → come code ke anadr aap website ko create kar sakte ho.

// → first aapko express import karna pdta hain.
const express = require("express");
// → unke bad express functioin ko call karo.
const server = express();

// ⚝ Express.js kya hai?
// → Express wo node.js ka framework hain.
// → web framework hai jo Node.js par based hai.

// ⚝ kiske liye Express ka use karte hain?
// Yeh web applications aur APIs banane ke liye use hota hai.

// ⚝ Kyu karte hain Express.js ka use?
// • Easy Routing: Tum multiple routes ko easily handle kar sakte ho.
// • Middleware Support: Tum request aur response ko manipulate kar sakte ho.
// • Rapid Development: Express se tum quickly scalable web applications build kar sakte ho.
// • Flexible: Yeh easily integrate hota hai baaki libraries aur tools ke sath.

// ⚝ Express.js kaise work karta hai Node.js me?
// 1. Express ko install karo: npm install express
// 2. Express application create karo:
const express = require("express");
const app = express();
// Define route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Server ko listen karo
app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/`);
});

// Steps Breakdown:
// Install: npm install express command use karke Express install karo.
// Create Application: express() function ko call karke ek Express application banao.
// Define Routes: app.get() use karke routes define karo. req (request) aur res (response) objects use karke requests ko handle karo.
// Listen: app.listen() method use karke server ko specific port par listen karne ke liye ready karo.

// Example Explanation:
// express ko import karo: const express = require('express');
// Application create karo: const app = express();
// Route define karo: app.get('/', (req, res) => { res.send('Hello, World!'); });
// Server listen: app.listen(port, () => { console.log(Server running at http://localhost:${port}/); });

// ✰ get() method :
// → get method se aap url ko access kar sakte ho.
// → yeh method 2 argument leta hian.
// 1. route: URL path jo tumhe handle karna hai.
// 2. callback Function: jo GET request aane par execute hota hai. Isme do arguments hote hain, request (req) aur response (res). ye dono object hain
//  - req: Yeh object request related information ko handle karne ke liye use hota hain.
//  - res:  Yeh object response ko form karne ke liye use hota hai. res.send('Hello, World!') response ko client ko bhejta hai.
// Scenario:
// Socho tumhare paas ek webpage hai jo "Hello, World!" print karta hai jab bhi user root URL par visit karta hai. GET request server ko ye signal deti hai aur server appropriate response bhejta hai.

// aesa nahi nahi hain ki aap sirf GET method ka hi use kar sakte hain.
// inke alawa Post, Patch, Delete ye sab use kar sakte ho.
// GET: Data ko retrieve (fetch) karne ke liye use hota hai.
// POST:: Naya data create (insert) karne ke liye use hota hai.
// PATCH: update (modify) karne ke liye use hota hai.
// DELETE: Data ko delete (remove) karne ke liye use hota hai.

// **Short Cut: Ab tum Express.js me CRUD (Create, Read, Update, Delete) operations ko easily implement kar sakte ho.
