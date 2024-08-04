// call bind apply

function fun(age, gender) {
  console.log(this.fName, age, gender);
}

var obj1 = {
  fName: "john",
};

var obj2 = {
  fName: "keny",
};

// fun.call(obj2, 12, "male");
fun.apply(obj1, [12, "male"]); // in apply we need to insert the values of parameter inside the square braces.
var a = fun.bind(obj2, [12, "male"]); // bind will make it a 'function'
console.log(typeof a);
