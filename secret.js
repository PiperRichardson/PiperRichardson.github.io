var enteredPass;


function password() {
	enteredPass = document.getElementById("password").value
	if(enteredPass == "password") {
	document.getElementById("check").innerHTML = "ACCESS GRANTED";
	document.getElementById("check").style.color = "green";
	window.location = "index.html";
}
	else {
		document.getElementById("check").innerHTML = "the password " + enteredPass + " was the wrong password.";
		document.getElementById("check").style.color = "Black";
	}
}
document.getElementById("verify").addEventListener("click", password);
