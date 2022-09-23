// JavaScript Code

//input
//Process
const button = document.getElementById("btn1");

button.addEventListener("click", () => {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;
  const q6 = document.getElementById("q6").value;

  console.log(q1);
  if (!q1) {
    return (document.getElementById("q1res").innerHTML = "❌ Missing");
  }

  if (q1 === "multiplayer" || q1 === "answer2") {
    document.getElementById("q1res").innerHTML = "✅ correct";
  } else {
    document.getElementById("q1res").innerHTML = "❌ Wrong";
  }
});
//Output
