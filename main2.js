// JavaScript Code

//Event Listerner on the button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  const q1value = document.getElementById("q1input").value.toLowerCase();
  console.log(q1value);

  if (q1value === "phone") {
    document.getElementById("q1output").innerHTML = "Right";
  } else {
    document.getElementById("q1output").innerHTML = "Wrong";
  }
}
