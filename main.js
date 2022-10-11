// IPO Algorithm (Input-Process-Output)

//Input
document.addEventListener("click", sayStuff);
function sayStuff() {
  let username = prompt("What is your name ");
  let like = prompt("Do you like Video Games?");
  let divice = prompt("In what divice you would like to play?");

  //Process

  let meg = `WOW, ${username} You Do Like Video Games`;
  let msg = `Awasome, Nice to Hear ${username}`;
  let mg = "Let me present you The War Robots";
  let Like = `WOW,${username} You Like to play in ${divice}`;
  let present = `OKAY, THEN`;

  //Output

  alert(msg);
  alert(Like);
  alert(meg);
  alert(present);
  alert(mg);
}
