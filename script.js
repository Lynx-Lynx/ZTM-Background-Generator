var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.getElementById("button");



//setGradient > manually set input value, display CSS linear gradient property
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value 
	+ ")";

	css.textContent = body.style.background + ",";
}

window.onload = setGradient();

//randomGradient > random color values to gradient after button click
function randomGradient() {
	var randomColor1 = "#" + ((1<<24)*Math.random() | 0).toString(16);
	var randomColor2 = "#" + ((1<<24)*Math.random() | 0).toString(16);
	var randomColor3 = "#" + ((1<<24)*Math.random() | 0).toString(16);
	body.style.background = "linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2 
	+ ", " 
	+ randomColor3 
	+ ")";

	css.textContent = body.style.background + ",";
	color1.value = randomColor1;
	color2.value = randomColor2;
	color3.value = randomColor3;
}
button.onclick = randomGradient;

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

