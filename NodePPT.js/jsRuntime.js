// javascript Runtime :

// Node.js javascript runtime enviroment hain.
// javascript runtime enviroment means : jaha pe aapka code chlta hain.
// javascript code sirf waha par hi chalta haian jaha pe javascrpt ka engine ho.
// every browser me javascript ka engine hain.
// javascirpt engine ke bina aapka javascript ka code chlata nahi hain.

// Follow the diagram:
// javascript synchoronus and single threaded language hain.
// synchoronus means: line by line code chalta hain.
// single threaded means: code chlane ke liye unke pass only one hi thread/worker hain.
// aapka javascript ka code main thread chalata hain.
// aapka javascrpit ka code js engine chalta hain.
// agar unme koi Asynchoronus work yani ki setTimeOut, setEnterval, fetch, etc. ase time lagne vale work javascript nahi karta hain.
// unme time lagta hain wo time pe wo ruke to aage ka code chalna bandh ho jayega. jab tak wo work nahi honge to aage ki sabhi line chlani bandh ho jayegi.
// isi liye asa time lagne vala kam main thread browser ko de deta hain.
// browser wo kam unke koi bhi ek thread ko karne ko bolta hain.
// agar browser ke pass ek ya to ek se jayada work hain to wo task queue me pendding me rakh denga.
// jab bhi koi worker thread free ho tab unko ye kam karne ko bolega.
// for example: aapne browser ko data fetch karne ke liye bola hain.
// but abhi browser ke pass koi bhi worker thread free nahi hain.
// isi liye browser wo kam ko task queue me rakh denga.
// aapko question hota hain ki task queue me to multiple task pade honga.
// task queue me se konsa task browsesr sabse pahle lenga.
// task queue yani ki First In First Out.
// jo task pahla aaya hain wo task browser pahle lenga.aese browser ke task queue work karte hain.

// browser se data lane ke liye fetch likhna padta hain. ye fetch method then or catch function ko chlata hain.
// ye then...catch method ka code javascript chalata hain.
// isi liye wo code ko browser task queue me rakh deta hain.
// task queue two types ke hain :-
// 1. Microtasks
// 2. tasks queue

// 2.tasks queue
// → taskqueue me jo pahla task aaya hain wo sabse pahle chalega.
// → taskqueue aapka callback function chalta hain.
// → callback means : fir se javascript ka code chalana.

// Event Loop:
// Event loop manager jessa kam karta hain.
// continues monitor karta hain ki kya javascript free ho gya hain or nahi. end task queue me koi task pada hain ya nahi.
// jab bhi jaavascript ka worker free ho tab Event loop js ke worker ko task queue mese task de deta hain.
// aese continues multiple line chalti hain.

// aap jo code chalate ho wo sirf java script nahi hain.
// wo javascript + browser API dono milke code chalta hain.
