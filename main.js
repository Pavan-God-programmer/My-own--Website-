// JavaScript Code

const username = localStorage.getItem("username");

if (!username) {
  let username = prompt("What is your name ") || "noneSet";
  let like = prompt("Do you like Video Games?");
  let divice = prompt("In what divice you would like to play?");

  console.log(username);
  localStorage.setItem("username", username);
}

if (username !== "noneSet" && username !== null) {
  document.getElementById("username").innerHTML = `${username}`;
}
// IPO Algorithm (Input-Process-Output)
