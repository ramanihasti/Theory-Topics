// ⁕ __dirname :
//  Yeh variable current directory ka absolute path return karta hai jisme script run ho rahi hai.
// __dirname aapke current folder ka path return karta hain.
Example:
const path = require("path")
// Yeh line Node.js ke path module ko import karti hai jo path-related utilities provide karta hai.
console.log("__dirname", __dirname);
// output : C:\Users\hasti\Desktop\Node.js

// basename() :
// current folder(directory) ka name return karenga.
Example:
console.log("__dirname", path.basename(__dirname));
// output:  Node.js

// isAbsolute() :
// aap jo script run kar rahe ho sahi folder me hain ya nahi wo check karta hain.
// __dirname current directory ka absolute path return karta hai.
// isAbsolute() check karta hai ki kya yeh path absolute hai.
Example:
console.log("__dirname", path.isAbsolute(__dirname));
// output: true

// parse() :
// yeh method aap ke folder ka path chote chote tukdo me bech(devide) deta hain.
Example:
console.log("__dirname", path.parse(__dirname));
// output :
// __dirname {
//     root: 'C:\\',   //main drive
//     dir: 'C:\\Users\\hasti\\Desktop',  //directory/folder
//     base: 'Node.js',  //current folder name
//     ext: '.js',   //extension
//     name: 'Node'  //folder name
//   }
// console.log("__filename", path.parse(__filename));

// format() :
// path.format() method Node.js me path objects ko path strings me convert karne ke liye use hota hai. Yeh method path object leta hai aur usse ek formatted string me convert kar deta hai.
Example:
const pathObject = {
    root: "/",
    dir: "/home/user",
    base: "file.txt",
  }; 
  const formattedPath = path.format(pathObject);
  console.log(formattedPath);
// Output: /home/user/file.txt

// join() :
// aapke file ya to folder ke path ko join karne me help karna hain.
console.log(
    "join",
    path.join(
      __dirname,
   
      "../files",
      "/products",
      "trending-products",
      "products.csv"
    )
  );
// output : C:\Users\hasti\Desktop\files\products\trending-products\products.csv
  
// resolve() :
// path.resolve() method ko __dirname ke sath use karte hain Node.js me. Is method ka use absolute path create karne ke liye hota hai. 
// Yeh relative path ko absolute path me convert karta hai.
Example: console.log( "resolve", path.resolve(__dirname, "../files", "/products", "trending-products", "products.csv"));
// output: C:\products\trending-products\products.csv
                              
// extname() :
// aapke folder ka extensioin return karta hain. 
// folder ka extensioin nahi hota hain isi liye wo blank return kar denga.
Example: console.log("__dirname", path.extname(__dirname));
// output : __dirname kai j nai.

// dirname() :
// dirname() aapko parent folder ka path return karta hain.
// path.dirname() method use hota hai kisi path ka parent directory nikalne k e liye. Lekin __dirname already current folder ka path hota hai.
Example: console.log("__dirname", path.dirname(__dirname));
// output: C:\Users\hasti\Desktop

// relative() :
// Iska use hum do paths ke beech me relative path nikalne ke liye karte hain. Yeh method do arguments leta hai: from aur to, aur yeh determine karta hai ki kaise from path se to path tak pahuncha jaaye.
// from path se baharnikl ke to path tak kese jana hain kwo relative path batata hain.
Syntax: path.relative(from, to)
Example:
const formpath = path.join(__dirname, "files", "products", "trending-products");
const topath = path.join(__dirname, "files", "users");
console.log("formpath", formpath);
console.log("topath", topath);
const relativepath = path.relative(formpath, topath);
console.log("relativepath", relativepath);

// Output: 
// formpath: C:\Users\hasti\Desktop\Node\files\products\trending-products
// topath: C:\Users\hasti\Desktop\Node\files\users
// relativepath: ..\..\users

// path.relative(fromPath, toPath) inhe compare karke ../../users return karta hai, jo batata hai ki trending-products se users directory tak kaise pahuncha jaaye.

// win32() :
// path.win32 ensures ki humara code Windows-style paths use kare, chahe humara code kisi bhi platform pe run ho raha ho.
// Helpful for cross-platform applications jo Windows-specific paths ko handle karna chahte hain.
Example: console.log("win32 join", path.win32.join(__dirname, "files"));
//  output: C:\Users\hasti\Desktop\Node\files