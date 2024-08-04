// proto

// let obj = {
//   fName: "john",
// };

// let obj2 = {
//   mName: "cena",
// };

// how proto works?

// obj2.__proto__ = obj;
// console.log(obj2.mName);

// obj2 = object.create(obj);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user = new Person("John", 8);
user.greet();
console.log(user);
