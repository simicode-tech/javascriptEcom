const intro = document.getElementById("intro");
const div = document.querySelector("#list");
const display = document.getElementById("display");
const result = document.getElementById("result");
const removeResult = document.getElementById("removeResult");
const h2 = document.querySelector("h2");
const listItem = document.querySelector("#listItem");
const img = document.querySelector("img");
const addNumber = document.querySelector("#addNumber");
const clickAdd = document.querySelector("#addClick");
const btn = document.querySelector("#btn");
const msg = document.querySelector(".msg");
const navBar = document.getElementById("nav");
intro.className = "add";
intro.className = "link";

console.log(intro);

// using classList

div.classList.add("add");
div.classList.add("hide");
div.classList.remove("add");
div.classList.toggle("visible");
div.classList.toggle("hide");

if (div.classList.contains("visible")) {
  //   alert("Yes");
}

console.log(div);

const h1 = document.createElement("h1");
const text = document.createTextNode("I love JavaScript");
h1.appendChild(text);
display.appendChild(h1);

const link = document.createElement("a");

link.id = "home";
link.href = "https://facebook.com";
link.target = "_blank";
link.textContent = "Facebook";

display.appendChild(link);

result.remove();

removeResult.removeChild(h2);

// removeResult.remove();

const h3 = document.createElement("h3");
h3.setAttribute("id", "text");
h3.setAttribute("class", "bg");
console.log(h3);

const textDisplay = document.createElement("div");

textDisplay.innerText = "lorem";

document.body.appendChild(textDisplay);

const array = ["Car", "Phone", "Bag"];
// console.log(array[1]);

let list = "";
for (let i = 0; i < array.length; i++) {
  list += `
            
                <li>${array[i]}</li>
            
 `;
  listItem.innerHTML = list;
}

function sayHello() {
  alert("Hello");
}

function over() {
  img.style.border = "1px solid red";
  img.style.padding = "10px";
}

function out() {
  img.style.border = "none";
}

let number = 0;
// console.log(img);
clickAdd.addEventListener("click", function () {
  number++;
  addNumber.innerHTML = number;
});

console.log(msg);
// btn.addEventListener("click", function () {
//   if (msg.classList.contains("msg")) {
//     msg.classList.remove("msg");
//     msg.classList.add("add");
//     console.log(msg);
//   } else {
//     console.log("No");
//   }
// });

btn.addEventListener("click", myClick);

function myClick(e) {
  console.log((e.target.innerText = "send"));
}

// console.log(navBar);
navBar.addEventListener("click", function (e) {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains("link")) {
    navBar.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});

// function navBarClick(e) {

// }

console.log(document);


for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}