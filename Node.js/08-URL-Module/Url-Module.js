// URL Module:
// URL module aapko formated/breakdown URL return karke deta hain.
// Yeh web applications me kaafi useful hota hai jab URL handling zaruri ho.

// URL module ko sabse pahle import karna padta hain.
const url = request("url");

// ✯ Reasons to Use url Module:
// 1. URL Parsing: URL ko parts me break karke usse read karna.
// 2. URL Formatting: URL object ko string me convert karna.
// 3. URL Resolving: Relative URL ko absolute URL me convert karna.

// url.parse() :
// → url module aapko parse function deta hain.
// • kyu use karte hai url.parse() method?
// → URL string ko parts me break kar deta hai aur ek URL object return karta hai.
// → {key : value} pair me URL return karta hain.
// → wo 4 argument leta hain:
// 1. urlString (required): URL string jo parse karni hai.
// 2. parseQueryString (optional): Agar true set karein, toh query string ko parse karta hai aur query property object form me return karta hai. Default false hota hai.
// 3. slashesDenoteHost (optional): Agar true set karein, toh '//' ko host identifier maana jata hai. Default false hota hai.
// 4. options (optional): Additional options jo parsing behavior ko control karte hain.
// 2 argument aapko aapka url object me return karta hain agar true bhejo to. by default false hota hain. 
Example:
const url = require("url");

console.log(
  url.parse(
    "http://localhost:5000/about?category=men&price=500&color=red",
    true
  )
);
// output :
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:5000',
//     port: '5000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?category=men&price=500&color=red',
//     query: [Object: null prototype] {
//       category: 'men',
//       price: '500',
//       color: 'red'
//     },
//     pathname: '/about',
//     path: '/about?category=men&price=500&color=red',
//     href: 'http://localhost:5000/about?category=men&price=500&color=red'
//   }

// Summary:
// • protocol: URL ka protocol batata hai, jaise 'http:'.
// • slashes: '//' ka presence indicate karta hai.
// • auth: Authentication info. Is case me null hai.
// • host: Hostname aur port number ko combine karta hai, jaise 'localhost:5000'.
// • port: Port number define karta hai (e.g., '5000').
// • hostname: Host ka naam batata hai (e.g., 'localhost').
// • hash: URL fragment represent karta hai, is case me null hai.
// • search: Query string hai, jaise '?category=men&price=500&color=red'.
// • query: Query parameters ka parsed object, key-value pairs me.
// • pathname: URL ka path part hai, jaise '/about'.
// • path: Path aur query string ko combine karta hain.
// • href: Full URL string ko represent karta hai.
