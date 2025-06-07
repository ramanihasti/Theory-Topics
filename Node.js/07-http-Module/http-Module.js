// http Module :
// → Hyper Text Transfer Protocol (HTTP)
// → server ko create karne ke liye http module ka use karte hain.
// → server pe aap jo request bhejte ho unko http handle karta hain.

// → sabse pahle require function se http module ko import karte hain.
var http = require("http");

// createServer() :
// → http module aapko function deta hain.
// → createServer() karke aapko server create karna padta hain.
// → createServer() argument me ek function leta hain.
// → wo kfunction argument two object return karta hain.
// → req, res
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(5000 , () => {
    console.log("Server is listening on port 5000!")
  });
// .listen(5000) kya hain ?
// → user ko konsi port pe output show karna hian wo. yani ki konsi port pe request bhejni hain.
// → ye localhost: ke bad ka part hain.Example: http://localhost:5000/
// → .listen two argument leta hain :
// 1.port number(require): user ko konse port pe request bhejni hain wo number.
// 2.call back function(optional) : ye server live hone ke bad function chalta hain. 
//   http.createServer() પદ્ધતિમાં પસાર થયેલ ફંક્શન, જ્યારે કોઈ વ્યક્તિ પોર્ટ 5000 પર કમ્પ્યુટરને ઍક્સેસ કરવાનો પ્રયાસ કરશે ત્યારે તેને એક્ઝિક્યુટ કરવામાં આવશે.

// Read the Query String :
// http.createServer() માં પસાર થયેલ ફંક્શન પાસે એક req દલીલ છે જે ક્લાયન્ટની વિનંતીને ઑબ્જેક્ટ (http.IncomingMessage ઑબ્જેક્ટ) તરીકે રજૂ કરે છે.
// આ ઑબ્જેક્ટમાં "url" નામની મિલકત છે જે ડોમેન નામ પછી આવતા urlનો ભાગ ધરાવે છે
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/ecmaScript" });
    res.write("<h1>Ramani Hasti</h1>");
    res.end();
  })
  .listen(5000);

// → { "Content-Type": "text/ecmaScript" } aap koi bhi de sakte hain.
// → "text/plain" denge to wo only simple text ki tarahh output denga.
// → "text/html" denge to wo html ki tarahh output denga.
// → "text/css" denge to wo ss ki tarah ouput denga.
// → "text/ecmaScript" denge to wo javascript ki tarah output denga.
// ⚝ res.writeHead:
// Yeh method response headers set karta hai. Response headers HTTP response ke meta-data ko specify karte hain.
// • 200:
// Yeh status code hai jo response ki status batata hai. 200 ka matlab hai "OK" yani request successful thi.
// • { "Content-Type": "text/html" }:
// Yeh ek object hai jo response headers ko specify karta hai.
// "Content-Type" header batata hai ki response ka content kis type ka hai.
// "text/html" ka matlab hai response HTML format me hai.

// output:
// Ramani Hasti
// → type change karne par output kese change hota hain wo dekh ne ke liye.
// → inspect open kaarke - Network - localhost - Preview me output dikhta hain or Response me code dikhta hain.

Example:
const http = require("http");
const fs = require("fs");

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
server.listen(5000);

// problem:
// sabhi file ka url define karna padta hain.
// sabhi file ko read karvana padta hain.
// abhi to hamne inage ka image address diya hain.
// agar unko save karke external diya hota to sabhi image ka url define karna padta hain.
// agar 100 image hain to bar ye karna padta hain ye achha nahi hain.
// inko aasan banane ke liye hum express ka use karenge.

// abhi to hamne only index.html vali file me hi internal css and internal javascript di hain.
// agar unko ham external css and javascript denge to hamko sabhi file ka url dena padega.
// jaise ki (req.url === "./css/index.css") hain to e work karna hain. end so on....
// unka code thoda lengthy ho jayenga.
// isi liye unko kese access karte hain wo hum Express me sikhenge.
