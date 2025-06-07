// sort method
// orignal array ko change kar detaa he.
// supose that, A to Z string me word aa jata he.
//  a,b,c,d wise sorting ho jati he.

// ex:-
const arr = ["banana", "apple", "mango"];
arr.sort();
console.log(arr);

// same as number ke sath hota he.
// pahle sabse chota number print hota he bad me usse bada number print hota he.
// only frist index check karenga.

const arr1 = [52, 8, 3, 4, 9, 18, 6];
arr1.sort();
console.log(arr1);

// small and bad me large number print ho kar aata he.
const arr2 = [52, 8, 3, 4, 9, 18, 6];
arr2.sort((a, b) => a - b);
console.log(arr2);
