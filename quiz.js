var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;

function calculate() {
	result = 0;
	if (q1.value == "Jellyfish"){
		result = result + 1;
	}
	if (q2.value == "Fry"){
		result = result + 1;
	}
	if (q3.value == "Brownies"){
		result = result + 1;
	}
	if (q4.value == "Purple"){
		result = result + 1;
	}
	if (q5.value == "Hot Air Balloon"){
		result = result + 1;
	}
	if (q6.value == "Yoyo"){
		result = result + 1;
	}
	if (q7.value == "Mouse"){
		result = result + 1;
	}
	if (q8.value == "Outlet"){
		result = result + 1;
	}
	if (q9.value == "Pizza"){
		result = result + 1;
	}
	if (q10.value == "English"){
		result = result + 1;
	}
	score.innerHTML = result;
}
submit.addEventListener("click", calculate);
















