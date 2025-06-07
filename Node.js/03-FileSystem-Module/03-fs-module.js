// third module type:
// ✯ fs module(file system module) :-
// → fs module hame file handling karne me help karta hain.
// → kese tarike se help karna hain. jaise ki file read,write,delete...

// Common use for the File System module:
// - Read files
// - Create files
// - Update files
// - Delete files
// - Rename files

// 1.kyu Node.js file system module ka use kate hain?
// → Node.js fs module aapko apne computer ke files ke sath work karni ki permission deta hain.
// fs modules ka use karne ke liye. require() function ko include kzrna padta hain.ફાઇલ સિસ્ટમ મોડ્યુલનો સમાવેશ કરવા માટે, require() પદ્ધતિનો ઉપયોગ કરો:
// ex: var fs = require('fs');
// isme require() ek function hain. wo one argument leta hain path.
// wo path leta hain jis file ke sath aapko work karna ho.

// Read Files:
// → read file method aapki file ko read karne ka kam karti hain.
// → syntax:
            // fs.readFile() 
            // fs.readFileSync()
// • readFile() :-
// → fs.readFile method Node.js me 3 arguments leta hai:
// → 1. konsi file read karvani hain wo path.
// path (required): Yeh string ya Buffer object hota hai jo file ka path define karta hai.
// 2.callback (required): Yeh ek function hota hai jo do arguments leta hai: error (agar koi error hoti hai) aur data (jo file ka content hota hai).
// 3. options (optional): Yeh object ya string ho sakta hai jo encoding specify karta hai. Agar nahi diya gaya, toh default value 'null' hoti hai.
Example:
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// • readFileSync() :-
// fs.readFileSync method Node.js me 2 arguments leta hai:
// 1.path (required): Yeh string, Buffer, URL, ya file descriptor ho sakta hai jo file ka path define karta hai.
// 2.options (optional): Yeh object ya string ho sakta hai jo encoding ya flag specify karta hai.
Example:
const data = fs.readFileSync('example.txt', {encoding: 'utf8'});
console.log(data);

// ✯ Bunding:-
// → aap read method call karvate ho to wo aapko terminal ek buinding return karenga.
// → Buinding kya hain?
// → wo ek container hain. jis me hum content ko store karte hain.
// → buinding e binary number store hote hain.but binary number se terminal pura bhar jata hain.
// isi liye inko read karna thoda muskil hain.
// isi liye terminal me Hexadecimal number store hote hain.

// ✯ Decimal to binary convert:
// Bilkul! Let's convert a decimal number ko binary me:
// Example: Decimal number 13
// Number ko 2 se divide karo aur remainder note karo.
// Quotient ko phir se 2 se divide karo tab tak jab tak quotient 0 nahi ho jata.
// Binary number ka order hoga bottom se top tak remainders read karke.
// Chalo ab 13 ko convert karte hain:
// 13 / 2 = 6 remainder 1
// 6 / 2 = 3 remainder 0
// 3 / 2 = 1 remainder 1
// 1 / 2 = 0 remainder 1
// Ab, bottom se top read karo: 1101

// ✯ character to binary convert:
// ASCII code dhoondho: "A" ka ASCII code 65 hai.
// ASCII code ko binary me convert karo: 65 ka binary 01000001 hota hai.
// Steps:
// 65 / 2 = 32 remainder 1
// 32 / 2 = 16 remainder 0
// 16 / 2 = 8 remainder 0
// 8 / 2 = 4 remainder 0
// 4 / 2 = 2 remainder 0
// 2 / 2 = 1 remainder 0
// 1 / 2 = 0 remainder 1
// Bottom se top read karo: 01000001.

// ✯ character code:-
// → sabhi character aur number ke code different hain.
// → kyu charcter ko koi ek code dena padta hain?
// → A ka character code 65 hain. agar aap 65 + 65 karonge to 'A65' asa ouput milenga.
// → kyuki decimal number ko hum binary me convert kar sakte hain. but charaters ko direct binary me convert nahi kar sakte hain.
// isi liye sab se pahle character ko number me convert karte hain. bad me wo binary me convert honga.
// → kyuki 65 a number hain isi liye unka bhi character code alga honga.aur A ka bhi aklag honga.
const char = 'A';
const code = char.charCodeAt(0);
console.log(code);
Output:
65
char + 65;
output: 'A65'
// A : character hain.
// 65: character A ka code hain jisko character code kahte hain.
// a → 97, b → 98...: aese bahut sare character ke code combine hote hain.jisko character set bolte hain.
// aese hi javascript character set ko follow karta hain. jisko hum unicode character set bolte hain.

// ✯ encoding:
// → encoding ek process hai. 
// → jisme hum text ya data ko ek specific format me convert karte hain taaki woh easily store ya transfer kiya ja sake. Simple terms me, yeh ek translation hai.
// • encoding ka use kyu karte hain?
// → kyuki computer character ya to number ko samjta nahi hain. isi liye unko binary (0 aur 1) me convert karna padta hain.
// → sabhi character aur number ko ak character code diya gaya hain.
// sabse pahel encoding koi bhi text ya to number ko character code me convert karenga bad me wo code ko binary me convert karenga.
// aese hi binary number ko character code me convert karte hain aur unko character me covert karte hain.
// Imagine karo tumhe kisi ko "नमस्ते" likhna hai, but unke computer ko Hindi samajh nahi aata. Toh hum yeh "नमस्ते" ko encoding ke zariye binary (0s aur 1s) me badalte hain, taki dono ke computers samajh paye.
Example:
// Original text: नमस्ते
// UTF-8 encoded text: E0 A4 A8 E0 A4 AE E0 A4 B8 E0 A5 8D E0 A4 A4 E0 A5 87
// Is tarah se encoding, different computers aur devices ke beech communication possible banati hai.

// ✯ UTF-8 (Unicode Transformation Format - 8-bit)
// UTF-8 ek encoding standard hai jo characters ko binary data (0 aur 1) me convert karta hai. Matlab, jab hum text file me likhte hain, toh UTF-8 us text ko numbers me change karke store karta hai.
Example 
// Hello
// H in UTF-8: 01001000
// e in UTF-8: 01100101
// l in UTF-8: 01101100
// l in UTF-8: 01101100
// o in UTF-8: 01101111