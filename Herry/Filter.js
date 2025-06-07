// filter:
// filter() method does not change the orignal array.
// filter() method create a new array
// filter() method dose not execute the function for empty array.
// filled with element that pass a text provide by a function.
// comparision/condition aapi sakia chia.
// filter method ak function leta he
// function tin(3) argument dete he : value, index, array
// kyu use karte hain?
// delete statement ke liye filter us kar sakte hain.

let ages = [21, 32, 15, 18, 19, 25];
let find = ages.filter(function (age) {
  return age >= 18;
});
console.log(find);

// Description w3 school:
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
