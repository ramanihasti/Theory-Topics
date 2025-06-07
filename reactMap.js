// React Map

// Map method ek new array return karta hain.
// Orignal array me koi chnage nahi karta hain.
// Hamari language me Map method ek loop jaisa hain.
// Loop jesse bar bar chalta he.

// map ek function leta hain. As in argument.
// map function me teen(3) argument leta he.
// 1.value(element) 2.index 3.array
// function ke andar aap jo bhi kam karva na ho wo kara sakte ho.
// function ko return karna compulsary hain.
// othrwise new array nahi milega.

// map argument me kya leta hain?
// map method arguument me eke function leta he.

// map() kab use karte he?
// jab bhi aapke pass koi origanal array ho or unme change/update karke aapko naya array banana ho tab map method ka use karte he.

// map method kya he?
// map method turn by turn value ko access kaarta hain.
// aapne jo function diya he wo chalata he.
// function ke return me map new array banake deta hain.

// map ko curly bracket{} ke bich me kyu likhte hain?
// map ek expression hain.
// esi liye {} curly bracket me likhte hain.

// React map method syntax:
// {variableName.map((value,index,array) =>
// {
// return value*3
// })}

// React Map example:
// const element = [1,2,3,4,5];

//  {element.map((value) => {
// return value * 2
// })}

// List
// Map method se hum List ko render kar sakte hain.
// map se hum same component ka use bar bar kar sakte he.
// bar bar same component ko call karvana accha nahi he.
// isi liye map ka use karke bar bar chala sakte ho.
// usase aapko code bhbi ocha write karna padega.
// and easy rahega.

// list ko kese render karteh hain?
// list ko array of object ke angar render kar sakte hain.
// array ke ek object me multiple value ko store kar sakte hain.
// jaise ki for example :-
const data = [
  {
    id: 1,
    name: "Ramani Hasti",
  },
  {
    id: 2,
    name: "Dhaduk Mensi",
  },
  {
    id: 3,
    name: "Sardhara Dhruvi",
  },
  {
    id: 4,
    name: "Radadiya Kunjal",
  },
];
