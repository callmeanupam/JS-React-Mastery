// property flag and descriptors

let emp = {};
emp.name = "john";

console.log(Object.getOwnPropertyDescriptor(emp, "name"));

Object.defineProperty(emp, "age");
