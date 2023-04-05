const newLink = document.createElement("a");
const btn = document.querySelector("#btn");
const removeTag = document.getElementById("result");
const text = document.getElementById("text");
const h1 = document.getElementById("text_title");
const para = document.createElement("p");
const div = document.createElement("div");
const list = document.getElementById("list");
const product = document.getElementById("product");
const img = document.querySelector("img");
const showNumber = document.getElementById("numberText");
const add = document.getElementById("add");
const button = document.getElementById("btn2");
const msg = document.querySelector(".msg");

newLink.id = "link";
newLink.href = "https://alabiansolutions.com/";
newLink.textContent = "Alabian";
newLink.className = "btn ";
newLink.className = "btn btn-primary ";

newLink.style.textDecoration = "none";
newLink.style.border = "1px solid blue";
newLink.style.padding = "5px";
newLink.style.backgroundColor = "blue";
newLink.style.color = "white";
btn.appendChild(newLink);
console.log(newLink);

removeTag.remove();
// h1.remove();
text.removeChild(h1);

para.setAttribute("class", "text");

para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit.";

div.innerText = "Lorem ipsum dolor sit amet consectetur";

document.body.appendChild(div);

let content = "";

content += `<div class="">
                <h1> heading</h1>
             </div>
        `;

list.innerHTML = content;

const data = [
  {
    id: 1,
    img: "images/banner.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    id: 2,
    img: "images/banner.jpg",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    id: 3,
    img: "images/banner.jpg",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  },
  {
    id: 4,
    img: "images/banner.jpg",
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  },
  {
    id: 5,
    img: "images/banner.jpg",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  },
];
[
  {
    id: 1,
    name: "bag",
    price: 120,
    description: "red bag",
  },
  {
    id: 2,
    name: "shoe",
    price: 120,
    description: "red bag",
  },
];

// console.log(data[0].price);

let dataList = "";
for (let index = 0; index < data.length; index++) {
  dataList += `
    <div class="col-md-4">
    <div class="card">
      <img src=${data[index].img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data[index].title}/h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    `;

  product.innerHTML = dataList;
}

function clickMe() {
  alert("Click me");
}

function over() {
  //   document.write("Mouse Over");
  img.style.border = "1px solid red";
  //   alert("mouse over");
}
function out() {
  //   document.write("Mouse Over");
  img.style.border = "none";
  //   alert("mouse over");
}

let number = 1;
add.addEventListener("click", function () {
  showNumber.innerText = number;
  number++;
});

button.addEventListener("click", function () {
  if (msg.classList.contains("msg")) {
    msg.classList.remove("msg");
    msg.classList.add("newmsg");
    console.log(msg);
  } else {
    console.log("not found");
  }
});


