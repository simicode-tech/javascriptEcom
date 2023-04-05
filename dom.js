const h1 = document.getElementById("home");
const p = document.getElementsByTagName("p");
const home = document.getElementsByClassName("home");
// const h1 = document.querySelector("#home");
const home2 = document.querySelector(".home");
const home3 = document.querySelectorAll(".home");
const para = document.querySelector("p");
const result = document.querySelector("#result");
const h2 = document.querySelector("h2");
console.log(p[0]);

console.log(home[0]);
console.log(h1);
console.log(home2);
console.log(para);
console.log(home3[0]);

console.log(result.firstChild);

console.log(h2.parentElement.parentElement);

h1.style.color = "red";
h1.style.textAlign = "center";
h1.style.backgroundColor = "black";
result.style.backgroundColor = "gray";

console.log(h1);
h1.className = "note";

const note = document.querySelector(".note");

note.style.color = "white";
h1.className = "book note";
console.log(h1);

const book2 = document.querySelector(".second");

book2.classList.add("book", "pen");
console.log(book2);
// book2.classList.remove("second");

// if (book2.classList.contains("second")) {
//   alert("The second class exists");
// } else {
//   alert("invalid second class");
// }
console.log(book2);

const text = document.createElement("p");
const textcontent = document.createTextNode(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptates"
);
text.appendChild(textcontent);
book2.appendChild(text);

console.log(book2);
const item = document.querySelector("#item");
const h3 = document.createElement("h3");
const text1 = document.createTextNode("My Name is Janet");

h3.appendChild(text1);
console.log(h3);

item.appendChild(h3);
