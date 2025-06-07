// ⁕ __filename :
// Yeh variable current file ka absolute path return karta hai jo script run kar rahi hai.
// aap jo bhi file me code ko run kar rahe ho.

const path = require("path");

// wo current file ka pura path retu rn karta hain.
Example: console.log("__filename", __filename);
// output: C:\Users\hasti\Desktop\Node.js\02-path-module.js

// basename() :
// current file ka name return karenga.
Example: console.log("__fileName", path.basename(__filename));
// output: 02-path-module.js

// isAbsolute() :
// aap jo script run kar rahe ho sahi file me hain ya nahi wo check karta hain.
Example: console.log("./index.js", path.isAbsolute("./index.js"));
// output : false
// ./index.js ek relative path hai.
// path.isAbsolute("./index.js") check karta hai ki kya yeh path absolute hai ya nahi.

// parse() :
// aap jis current file me script ko run kar rahe ho.
// unko chote chote tukdo me devide kar ke ek object return karta hain.
Example: console.log("__filename", path.parse(__filename));
// output: __filename {
//     root: 'C:\\',
//     dir: 'C:\\Users\\hasti\\Desktop\\Node.js',  // directory path
//     base: '02-path-module.js', // file name including extension
//     ext: '.js',  //file extension
//     name: '02-path-module' //file name without extension
//   }

// format() :
// path.format() method ko use karke hum __filename ko ek path object me convert kar sakte hain aur phir wapas se formatted string me convert kar sakte hain. Example se samajhte hain:
Example: console.log("__filename", path.format(path.parse(__filename)));
// output: __filename C:\Users\hasti\Desktop\Node.js\02-path-module.js

// join() :
// aapke file ya to folder ke path ko join karne me help karna hain.
console.log(
  "join",
  path.join(
    __filename,
    "../files",
    "/products",
    "trending-products",
    "products.csv"
  )
);
// output : C:\Users\hasti\Desktop\files\products\trending-products\products.csv

// extname() :
// aapki file ka only extension return karta hain.
Example: console.log("__filename", path.extname(__filename));
// output: .js

// dirname() :
// Samajhne me aasaan hai! Node.js me __filename current file ka absolute path return karta hai. path.dirname() method use hota hai kisi path ka parent directory nikalne ke liye.
// jis bhi file me aap work karte ho unke parent folder ka path return karta hain.
Example: console.log("__filename", path.dirname(__filename));
// output: C:\Users\hasti\Desktop\Node
