// Node.js:

// 1.Node.js kya hain?
// → Node.js open-source, cross-platform, javascript runtime enviroment hain.
// → open-source means: aap freely use kar sakte hain.
// → cross-platform means: another browser me use kar sakte ho. for example, microsoft, window, linux.
// javascript runtime enviroment means: jaha pe aapka javascript ka code chalta hain.

// ☆ Node.js ek C++ application hain.
// Node.js se aap server create kar sakte ho, file handling kar sakte hain and file ko Zip & unzip kar sakte hai.
// a sare work hum javascript se nahi kar sakte hain.
// a sabhi library C++ ki hain.

// Example:
// → aapne javascript me browser pe server creat karne ka code write kiya hain.
// → a javascipt ka code sabse pahle javascript engine samjega.
// → bad me a code ko V8 samjke code ko machine code me convert karega. means ke 0101 language me convert karega.
// → fir dekhenga ki kya unme c++ library ki requirement hain ya nahi.
// → agar hame sirf 2+2 karvana hain ya to koi simple function/loop/if..else statement/etc. chalana hain to unme koi c++ library ki jarur nahi padti hain.
// → kyo ki wo javascript ka code hain.
// → example lete hain ki hame ek server create karna hain.
// → tab unme c++ library ki jarurat  padti hain.
// → isi liye V8 or library ke sath bindings hoti hain.
// → kyuki hame server kese create karna hain wo code c++ me likha hain isi liye Node.js ki API se bindings hoti hain.
// → binding means: jodavu/બંધનકર્તા
// → fir ye c++ ka code OS(operating system) ko milta hain.
// → agar aap ek se jayada Node.js ki API se work karna chahte ho to OS code ko task queue me lagata hain.
// → task queue me code jo pahle aaya hain wo sabse pahle code chalega.
// → jab bhi browser free hota hain tab browser tread ko task queue me se task karne ko bolta hain.
// → or browser ye work karta hain and javascript ka code ho to wo task queue ke callback ke liye rakh de hain.
// fir aapka event loop chalta hain.
// wo continues monitor karta hain ki kya javascript ka thread free hua hain ki hain.
// agar free ho gya hain task queue me se task callback karne ke liye bolta hain.
