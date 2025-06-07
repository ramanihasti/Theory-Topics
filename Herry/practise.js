// local storage
localStorage.setItem("name", "hasti");
localStorage;
// ek item delete karvi hoy to localstorage.remove() no use e karva ma ave 6.
// puri ki puri local storage delete karvi hoy to localstorage.clear() ka use hota he.

// arrow function & simple function
// simple
function sum(a, b) {
  return a + b;
}
// arrow
sum = (a, b) => {
  return a + b;
};
// same as the two method....
// result same hi milega dono ka kyuki dono function hi he.
// arrow function me function keyword ka use nahii hota.

// setTimeout & set time interval
// setTimeout
logkaro = () => {
  console.log("I am your log");
};
clr = setTimeout(logkaro, 2000);
// har 2 second ye run hoga.
// short means: sheduling

// setinterval
// clr = setInterval(logkaro, 2000);
console.log("asd", clr);
// harek 2 ssecond pe a statement repete hoga.
// sath me count (ginti) bhi hongi.
// statement rokva mate clearinterval no use thay che.
