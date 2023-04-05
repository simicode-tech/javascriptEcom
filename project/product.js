const productItem = document.getElementById("product-item");

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.addEventListener("click", nextPage);
previous.addEventListener("click", previousPage);

const fetchUrl = "https://fakestoreapi.com/products";

let newData = [];

let pageSize = 9;
let currentPage = 1;

async function renderProduct() {
  await getProduct();
  let productDisplay = "";
  newData
    .filter((row, index) => {
      let startPage = (currentPage - 1) * pageSize;
      let endPage = currentPage * pageSize;
      if (index >= startPage && index < endPage) return true;
    })
    .map((data) => {
      productDisplay += `
      <div class="col-md-4 col-12 col-sm-6 col-lg-4 about-card">
      <div class="card mb-5">
        <img src=${data.image} alt="" />
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">$${data.price}</p>
        </div>
        <div class="card-body">
          <a href="#" class="btn btn-primary">Buy now</a>
          <button
            id="addToCartBtn"
            class="addToCart"
            data-id="${data.id}"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
      `;
    });
  productItem.innerHTML = productDisplay;
}
renderProduct();

async function getProduct() {
  try {
    const res = await fetch(fetchUrl);
    // console.log(res);
    const data = await res.json();

    // console.log(data);
    newData = data;

    // console.log(newData);
  } catch (error) {
    console.log(error);
  }
}

getProduct();

function nextPage() {
  if (currentPage * pageSize < newData.length) {
    currentPage++;
    renderProduct();
  }
}
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProduct();
  }
}

// console.log(newData);
