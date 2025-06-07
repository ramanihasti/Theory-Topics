// 1. object litral
const car = {
  name: "audi",
  model: 2022,
};
console.log(car);

// 2. using new keyword
const student = new Object();
student.name = "dhruv";
student.marks = 25;
console.log(student);

// 3. constuctor method
function Person1(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  Object.defineProperty(this, "fullname", {
    get: function () {
      return this.fname + " " + this.lname;
    },
  });
}

const s1 = new Person1("Ramani", "Hasti");
console.log(s1); // Yeh function ko object ke andar dikhayega!
console.log("Fullname Output:", s1.fullname); // Yeh function ka output bhi show karega

function person2(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.fullname = function () {
    return fname + lname;
  };
}

const s2 = new person2("ramani", "hasti");
console.log(s1.fullname());

// const person = {
//   fname: "ramani",
//   lname: "hasti",
//   Fullname: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// console.log(person, person.Fullname());
