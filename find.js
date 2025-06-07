// Find

// 1.Find kya hain?
// → find ek function.

// 2.find method ka use kyu karte hain.
// → kuch value ko dhundh(gotvu) ne ke liye use karte hain.

// 3.find method work kese karta hain?
// → find ek hi bar chalta hain or pahele render pe jo milega wo return kar dega.
// → agar nahi milega to undefined return karega.

// syntax:
// find((value , index , array) => {
// block of code
// })

// ex:
find((value) => {
  return value.author_name === "Swami Sivananda";
});

// find map ki tarah ek functoin leta hain.
// as an argument.
// find function me teen(3) argument leta he.
// 1.value(element) 2.index 3.array
// function ke andar aap jo bhi kam karva na ho wo kara sakte ho

// Description w3 school:
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

// Array Find Methods:
// Method	Finds
// indexOf() : The index of the first element with a specified value
// lastIndexOf() : The index of the last element with a specified value
// find() : The value of the first element that passes a test
// findIndex() : The index of the first element that passes a test
// findLast() : The value of the last element that passes a test
// findLastIndex() : The index of the last element that passes a test
