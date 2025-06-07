// Events Module :
// → Node.js bulit-in("સંકળાયેલ") module hain jinko hum "Events" bolte hain.
// aap apne event create kar sakte ho. use kar sakte ho.

// ✯ Node.js ke Event :
// → file open karna, file ko read karna, file write karna, file appebd karna.

// Events Module :
// first aapko enents module import karna padta hain.
const events = require("events");

// The EventEmitter Object:
// તમે EventEmitter ઑબ્જેક્ટ સાથે તમારી પોતાની ઇવેન્ટ્સમાં ઇવેન્ટ હેન્ડલર્સને સોંપી શકો છો.
// EventEmitter() ek class hain.
// events module aapko ek function deta hain EventEmitter().

// .on event listener:
// wo 2 argument leta hain:
// 1. konsi event create karni hain unka name.
// 2. wo event pe kya kam karva chahte ho wo function.
// Listen to Events: Tum specific events ko listen kar sakte ho aur jab wo events trigger hote hain tab listener functions run kar sakte ho.
// Easy Explanation:
// Emit Events: Tum specific events ko trigger (emit) kar sakte ho.
// Listen to Events: Tum specific events ko listen kar sakte ho aur jab wo events trigger hote hain tab listener functions run kar sakte ho.
// Real Life Example:
// Socho tumhare ghar me ek doorbell hai.
// Doorbell (EventEmitter): Jab koi bell bajata hai to event emit hota hai.
// Person Listening (Listener): Tum ya koi aur sunta hai aur jab bell bajti hai to action leta hai (door open karna).
const emitters = new events.EventEmitter();
let orderCounts = 0;

emitter.on("pizza-ordered", () => {
  orderCounts++;
  console.log("Order Count", orderCount);
});

// Events emit:
// jab bhi aapko koi event trigger/fire/use karna ho to emit() ka use karte hain.
emitter.emit("pizza-ordered");

Example:
const events = require("events");
const emitter = new events.EventEmitter();

let orderCount = 0;
emitter.on("pizza-ordered", () => {
  orderCount++;
  console.log("Order Count", orderCount);
});
emitter.emit("pizza-ordered");
emitter.emit("pizza-ordered");
emitter.emit("pizza-ordered");

// jab bhi aap ye vali line call karonge to wo 1 se increment ho jayenga. 
emitter.emit("pizza-ordered");