// map method
// map() create a new array calling function array every element.
// map() does not change orignal array.
// map() create a new array.
// map() method dose not execute the function for empty array.
// map() method teen argument return karta he value, index, array.
// map() ak function leta he as in argument.

// map() kab use karte he?
// jab bhi aapke pass koi origanal array ho or unme change karke aapko naya array banana ho tab map method ka use karte he.

// map method kya he?
// map method turn by turn value ko access kaarta he.
// aapne jo function diya he wo chalata he.
// jo bhi return kiya he wo naya array me store karke deta he.

let orignalArr = [2, 4, 5, 6, 7];
document.writeln("orignalArray ", orignalArr);

// First method
let newArray = orignalArr.map(function (curElemennt, index, arr) {
  return curElemennt * 10;
});
console.log("newArray", newArray);

// second method
const temp = [];
for (let value of orignalArr) {
  temp.push(value * 10);
}
console.log("temp", temp);
// return all array element multiple by 10.

// third method
const elements = [];
for (i = 0; i < orignalArr.length; i++) {
  elements.push(orignalArr * 2);
}
console.log("elements", elements);

let num1 = [2, 4, 5, 6, 7];
let newArray1 = num1.map(function (curElemennt, index, arr) {
  return index;
});
console.log("Orignal Array index", newArray1);
// return array element index start to 0,1,2,3,.........

let num2 = [2, 4, 5, 6, 7];
let newArray2 = num2.map(function (curElemennt, index, arr) {
  return arr;
});
console.log("Orignal Array", newArray2);
// pura ka pura array print karke deta he.

// object example
let obj = {
  name: "anil",
  true: "this is a boolean key",
};
// map example
// aa rite pn map ni andar object define kari sakia chiye.
// set keyword no use kari ne value update pn kari sakia chiye.

let data = new Map([
  ["name", "hasti"],
  [true, "this is a best moment"],
]);
// set a new key || add the new key value
data.set("country", "india");

// object call
console.log(obj);
// map call
console.log(data);
console.log(data.keys());
console.log(data.values());
console.log(data.size);
//-- size ne call  karavathi key ni size male che.

// reduce:
// reduce() return a single value
// reduce() method does not change the orignal array.
// reduce() method dose not execute the function for empty array.
// asa result chahiye jiska output only single value ma aye
// tabhi reduce() method ka use kar sakte ho.
// suppose that use the +, -, *, /, % operator return the single value.

let number = [1, 4, 6, 5, 7, 9];
let find1 = number.reduce(function (a, b) {
  return a + b;
});
console.log(find1);

let number2 = [1, 4, 6, 5, 7, 9];
let find2 = number2.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(find2);

let number3 = [1, 4, 6, 5, 7, 9];
let find3 = number3.reduce(function (a, b) {
  return Math.min(a, b);
});
console.log(find3);
