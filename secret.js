function password() {
	if(document.getElementById("password").value == "password") {
	document.getElementById("check").innerHTML = "ACCESS GRANTED";
	document.getElementById("check").style.color = "green";
	window.location = "index.html";
}
	else {
		document.getElementById("check").innerHTML = "ACCESS DENIED";
		document.getElementById("check").style.color = "red";
	}
}
document.getElementById("verify").addEventListener("click", password);
