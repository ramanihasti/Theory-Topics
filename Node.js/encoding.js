// ✯ encoding:
// → encoding ek process hai.
// → jisme hum text ya data ko ek specific format me convert karte hain taaki woh easily store ya transfer kiya ja sake. Simple terms me, yeh ek translation hai.

// • encoding ka use kyu karte hain?
// → kyuki computer character ya to number ko samjta nahi hain. isi liye unko binary (0 aur 1) me convert karna padta hain.
// → sabhi character aur number ko ak character code diya gaya hain.
// sabse pahel encoding koi bhi text ya to number ko character code me convert karenga bad me wo code ko binary me convert karenga.
// aese hi binary number ko character code me convert karte hain aur unko character me covert karte hain.
// Imagine karo tumhe kisi ko "नमस्ते" likhna hai, but unke computer ko Hindi samajh nahi aata. Toh hum yeh "नमस्ते" ko encoding ke zariye binary (0s aur 1s) me badalte hain, taki dono ke computers samajh paye.
// Original text: नमस्ते
// UTF-8 encoded text: E0 A4 A8 E0 A4 AE E0 A4 B8 E0 A5 8D E0 A4 A4 E0 A5 87
// Is tarah se encoding, different computers aur devices ke beech communication possible banati hai.

// ✯ UTF-8 (Unicode Transformation Format - 8-bit)
// UTF-8 ek encoding standard hai jo characters ko binary data (0 aur 1) me convert karta hai. Matlab, jab hum text file me likhte hain, toh UTF-8 us text ko numbers me change karke store karta hai.
Example: Example;
// Hello
// H in UTF-8: 01001000
// e in UTF-8: 01100101
// l in UTF-8: 01101100
// l in UTF-8: 01101100
// o in UTF-8: 01101111
 