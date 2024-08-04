// var a = document.querySelector("h1").innerText;
// console.log(a);

// console.log("------------");

// var a = document.querySelector("h1").textContent;
// console.log(a);

// var target = document.querySelector(".hero");
// var newE = "<b> DropXout </b>";

// target.insertAdjacentHTML("afterend", newE);
// afterend, beforeend, beforestart, afterbegin

// - INNER HTML

// let a = document.querySelector(".hero");
// a.innerHTML += "<b> DOM</b>";
// console.log(a.innerHTML);

// - OUTER HTML

let a = document.querySelector(".hero");
a.outerHTML = "<b> DOM</b>";
console.log(a.outerHTML);
