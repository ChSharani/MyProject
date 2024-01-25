var age=18;

function img1(){
    age=age-1;
    document.getElementById("box").textContent=age;
}
function img2(){
    age=age+1;
    document.getElementById("box").textContent=age;
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}