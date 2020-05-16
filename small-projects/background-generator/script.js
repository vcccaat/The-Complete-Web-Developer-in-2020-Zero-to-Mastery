
document.querySelector(".color1").setAttribute("value","#ff0000")
document.querySelector(".color2").setAttribute("value","#ffe100")

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementsByTagName("button")[0];

function setGradient() {
	gradientChange(color1.value,color2.value);
}

function gradientChange(color1, color2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ ", " 
	+ color2 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setRandomGradient() {
	color1 = getRandomColor();
	color2 = getRandomColor();

	document.querySelector(".color1").setAttribute("value",color1)
	document.querySelector(".color2").setAttribute("value",color2)
	gradientChange(color1, color2);
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click",setRandomGradient)




