function num(kelvin) {
	var digit = kelvin;
	operation.innerHTML += digit;
}

function sign(signal) {
	var sign = signal;
	operation.innerHTML += sign;
}

function equal() {
	var k = operation.innerHTML;
	var g = eval(k);
	display.innerHTML = g;
}

function clean(){
	display.innerHTML = "";
	operation.innerHTML = "";
}

var swis = on;
if (swis.innerHTML == "ON") {
	operation.style.display = "none"
	display.style.display = "none"
}

function swison() {
	if (swis.innerHTML == "ON") {
		swis.innerHTML = "OFF"
		operation.style.display = "block"
		display.style.display = "block"
		operation.innerHTML = ""
		display.innerHTML = ""
	} else {
		swis.innerHTML = "ON"
		operation.style.display = "none"
		display.style.display = "none"
		operation.innerHTML = " "
		display.innerHTML = " "
	}

}

function del () {
		operation.innerHTML = operation.innerHTML.substr(0,operation.innerHTML.length-1)
}