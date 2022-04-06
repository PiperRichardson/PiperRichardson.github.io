var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE";
	}
}

function plus() {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE";
	}
}

function multiply2() {
	count = count * 2;
	document.getElementById("total").innerHTML = count;
}

function divide2() {
	count = count / 2;
	document.getElementById("total").innerHTML = count;
}

function add5() {
	count = count + 5;
	document.getElementById("total").innerHTML = count;
}

function minus5() {
	count = count - 5;
	document.getElementById("total").innerHTML = count;
}
function reset() {
	count = count * 0;
	document.getElementById("total").innerHTML = count;
}

document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("multiply2").addEventListener("click", multiply2);
document.getElementById("divide2").addEventListener("click", divide2);
document.getElementById("add5").addEventListener("click", add5);
document.getElementById("minus5").addEventListener("click", minus5)
document.getElementById("reset").addEventListener("click", reset)




