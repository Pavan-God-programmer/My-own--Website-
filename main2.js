// JavaScript Code

//Event Listerner on the button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let q1value = document.getElementById("q1input").value.toLowerCase();
  console.log(q1value);
  let q2value = document.getElementById("q2input").value.toLowerCase();
  console.log(q2value);
  let q3value = document.getElementById("q3input").value.toLowerCase();
  console.log(q3value);
  let q4value = document.getElementById("q4input").value.toLowerCase();
  console.log(q4value);
  let q5value = document.getElementById("q5input").value.toLowerCase();
  console.log(q5value);

  if (
    q1value === "phone" ||
    q1value === "pc" ||
    q1value === "windows" ||
    q1value === "imac"
  ) {
    document.getElementById("q1output").innerHTML = "Right✅";
  } else if (q2value === "71") {
    document.getElementById("q2output").innerHTML = "Right✅";
  } else if (q3value === "yes") {
    document.getElementById("q3output").innerHTML = "Right✅";
  } else if (q4value === "scorpion") {
    document.getElementById("q4output").innerHTML = "Right✅";
  } else if (q5value === "hawk") {
    document.getElementById("q5output").innerHTML = "Right✅";
  } else {
    document.getElementById("q1output" && "q2output" && "q3output").innerHTML =
      "🤣Your Wrong";
  }
}
