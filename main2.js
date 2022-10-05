// JavaScript Code

//Event Listerner on the button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let q1value = document.getElementById("q1input").value.toLowerCase();
  console.log(q1value);

  if (
    q1value === "phone" ||
    q1value === "pc" ||
    q1value === "windows" ||
    q1value === "imac"
  ) {
    document.getElementById("q1output").innerHTML = "Right✅";
  } else {
    document.getElementById("q1output").innerHTML = "🤣Your Wrong dumbass";
  }
}
