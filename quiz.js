var q1 = document.getElementById("q1");
var q1result = document.getElementById("q1result")

function checkq1() {
	if(q1.value == "Jellyfish"){
		q1result.innerHTML = "CORRECT";
	}
	else
	{
		q1result.innerHTML = "INCORRECT";
	}
}

document.getElementById("s1").addEventListener("click", checkq1)