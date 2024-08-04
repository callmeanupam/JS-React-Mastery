// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Person.prototype.greet = function () {
//     console.log(`Hello ${this.name}`);
//   };

//   let user = new Person("John", 8);
//   user.greet();
//   console.log(user);

// CLASS IMPLEMENTATION

// class Person {
//   // class and class name
//   constructor(name, age) {
//     // constructor with 2 parameters, name and age
//     this.name = name; // this.name, means person ka object, this.name, constructor ke name mein value de raha hai
//     this.age = age; // same age
//   }
//   greet = function () {
//     console.log(`Hello ${this.name}`); // name wo constructor se liya ja raha hai
//   };
// }
// let user = new Person("John", 8);
// user.greet();
// console.log(user);

class User {
  constructor(name) {
    this.name = name;
  }
  // method, function hota hai agar object or class ke andr use kiya to wo method hai
  sayHi() {
    console.log("Hello " + this.name);
  }
}

let user1 = new User("john");
user1.sayHi();

let user2 = new User("tate");
user2.sayHi();

let user3 = new User("Anupam");
user3.sayHi();

let user4 = new User("Ambika");
user4.sayHi();

console.log(User.prototype.sayHi);
// class is actually a function.
