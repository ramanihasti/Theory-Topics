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
