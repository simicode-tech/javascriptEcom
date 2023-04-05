const btn = document.getElementById("btn");
const msg = document.querySelector(".msg");
const myform = document.getElementById("myForm");
const password = document.getElementById("password");
const username = document.getElementById("username");
const email = document.getElementById("email");
const errorMessage = document.getElementById("output");

btn.addEventListener("click", clickMe);

function clickMe(e) {
  console.log(e.target.id);
}
// errorMessage.style.display = "none";
let data = [];
myform.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value.length === 0) {
    // errorMessage.style.display = "block";
    errorMessage.innerHTML = "Please enter your username";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "1.9rem";
    errorMessage.style.fontFamily = "roboto";
  } else if (email.value.length === 0) {
    errorMessage.innerHTML = "Please enter your email";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "1.9rem";
    errorMessage.style.fontFamily = "roboto";
  } else if (password.value.length < 6) {
    errorMessage.innerHTML = "Password cannot be less than 6 characters";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "1.9rem";
    errorMessage.style.fontFamily = "roboto";
  } else {
    errorMessage.innerHTML = "Congratulations! Forms successfully submitted";
    errorMessage.style.color = "green";
    errorMessage.style.fontSize = "1.9rem";
    errorMessage.style.fontFamily = "roboto";
    let info = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    data.push(info);
    localStorage.setItem("info", JSON.stringify(data));
    window.location.href = "userDetail.html";
    // console.log(data);
  }
});
