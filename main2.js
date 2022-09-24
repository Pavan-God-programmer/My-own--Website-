// JavaScript Code

//Event Listerner on the button 
document.getElementById("btn").addEventListener("click", btnClicked);


function btnClicked() {
   //input
  let q2 = +document.getElementById("q2").value;
  let q3 = +document.getElementById("q3").value;
  let q4 = +document.getElementById("q4").value;
  let q5 = +document.getElementById("q5").value;
  let q6 = +document.getElementById("q6").value;
 
  // Process
  let total = (q2 + q3 + q4 + q5 + q6);

  // Output
  document.getElementById("output").innerHTML = total;
  
}