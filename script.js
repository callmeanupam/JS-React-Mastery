// console.log("Hello world!");
// console.log("welcome");

// Variable - var, let, const

// let a = 5; // use let or const var is not recommended
// const b = 5;
// var t = 10;
// console.log(a, b, t);

// console.log("this");

// setTimeout(() => {
//   console.log("is world");
// }, 1000);

// setTimeout(() => {
//   console.log("welcome");
// }, 2000);

// callback
// function fun(val) {
//   console.log(val);
// }

// function add(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// add(5, 10, fun);

// callback hell

function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Processing ......");
      console.log("1) Loading Data");
      resolve();
    }, 3000);
  });
}

function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2) Collecting data");
      resolve();
    }, 4000);
  });
}
function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3) Approving data");
      resolve();
    }, 5000);
  });
}

function approved() {
  setTimeout(() => {
    console.log("4) Approved");
  }, 2000);
}

// loadingData(function () {
//   collectingData(function () {
//     approvingData(function () {
//       approved();
//     });
//   });
// });

// loadingData().then(collectingData).then(approvingData).then(approved);

// ASYNC AWAIT
// await will work only when the function will be 'async'

async function Ex() {
  await loadingData();
  await collectingData();
  await approvingData();
  await approved();
}

Ex().catch();
