let dataInfo = localStorage.getItem("info");
let userDetails = JSON.parse(dataInfo);
let tableBody = document
  .getElementById("userTable")
  .getElementsByTagName("tbody")[0];
for (let i = 0; i < userDetails.length; i++) {
  // console.log(userDetails[i]);
  let item = userDetails[i];
  console.log(item);
  let row = tableBody.insertRow();
  row.insertCell().innerHTML = item.username;
  row.insertCell().innerHTML = item.email;
  row.insertCell().innerHTML = item.password;
}
