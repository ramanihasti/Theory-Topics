// Express :
// Express wo node.js ka framework hain.
// inko bahar se install karna padta hian.
// command: npm install express

// agar aapke folder me package.json file naahi hain to sabse pahle wo create karni padti hain
// command: npm init -y
// fir wo file ko set karenge.

// install hua hain ki nahi wo check karne ke liye.
// npm --version express

// kyu use karte hain?
// → express se aap easyly node.js ke web server ko create kar sakte ho.
// → come code ke anadr aap website ko create kar sakte ho.

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const readStream = fs.createReadStream("./pages/index.html", {
      highWaterMark: 1024,
      encoding: "utf-8",
    });
    let data = "";

    readStream.on("data", function (chunk) {
      data += chunk;
    });

    readStream.on("end", function () {
      res.write(data);
      res.end();
    });
  }
});

// code ko come kar deta hain.
// file ko read karwana nahi padta hain. or writeHead nahi karna padta hain.
// res.writeHead(200, { "Content-Type": "text/html" }); ye nahi karvana padta hain.
// express me automatically define ho jataa hain.
