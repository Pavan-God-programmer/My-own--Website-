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
  let q2s = (q2);
  let q3s = (q3);
  let q4s = (q4);
  let q5s = (q5);
  let q6s = (q6);


  // Output
  document.getElementById("q2s").innerHTML = q2s;
  document.getElementById("q3s").innerHTML = q3s;
  document.getElementById("q4s").innerHTML = q4s;
  document.getElementById("q5s").innerHTML = q5s;
  document.getElementById("q6s").innerHTML = q6s;  
}