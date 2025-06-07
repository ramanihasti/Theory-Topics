// Stream Module :
// → stream module data ko chunks me handle karta hai.
// → yani ki data ko chote chote tukdo me handle karta hain.

// Streams ke Types:
// 1. Readable Streams: Jo data ko read karte hain (input streams).
// 2. Writable Streams: Jo data ko write karte hain (output streams).
// 3. Duplex Streams: Jo dono read aur write kar sakte hain.
// 4. Transform Streams: Jo data ko read aur write karne ke sath-sath transform karte hain.

// Process of Stream Example:
// → sabse se pahle hame youtube me koi ek 4k ka video dekhna hain.
// → video dekh ne ke liye hum youtube ke server pe request bhejte hain.
// → ye 4k video hain isi liye maximum 30GB ka honga.
// → itna bada data hain isi liye aapko ek sath nahi milta hain.
// → chote chote tukdo me data milta hain.
// → chalo man lete hain ki server ke pass 10kb ka ek Backet(🧪) ho wo ek backet pura data ka bhar jayega to wo data server user ko request me bhenga.
// → abhi wo data binary format me hain. isi liye unme pahle process hongi.
// → bad me wo video aapke computer ki screen pe visible honga.
// → agar aapka network slow chal raha hain to aapko aage ka video nahi dikhta hain.
// → aapko loading dikhta hain. unko hum bufffring bolte hain.

// ◈ Quesion hain ki fs.readFile() se bhi hum data ko read kar sakte hain.kyu hum fs.createReadStream() ka use kare?
// Ans: fs.readFile() se data ek sath read ho jata hain.
// fs.createReadStream() se data chote chote chunk me read hota hain.
// yahi banefit hain.

// ⁕ Streams ko real life example se samajhte hain.
// Example: Socho ek pani ki pipeline hai jo ek reservoir("જળાશય") se tumhare ghar tak pani deliver karti hai.
// Pipeline (Stream): Yeh ek continuous flow("પ્રવાહ") ko represent karta hai.
// Reservoir (Readable Stream): Yeh pani ka source hai jo continuously pani supply karta hai.
// Ghar ke Tap (Writable Stream): Yeh destination("મંજિલ") hai jahan pani aakar rukta hai.
// Pipeline me pani continuously flow karta hai aur tum tap se pani use kar sakte ho bina reservoir ka wait kiye. Isi tarah se, streams data ko chunks me handle karte hain, taaki data continuous flow me rahe aur efficiently(કાર્યક્ષમ રીતે) process ho.
