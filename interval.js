// setInterval

let num = 0;

var interval = setInterval(fun, 1000);

function fun() {
  let date = new Date().toLocaleTimeString();
  console.log(date);
}

setTimeout(() => {
  clearInterval(interval);
}, 10000);
