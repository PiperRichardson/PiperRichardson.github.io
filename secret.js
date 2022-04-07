function password1() {
	if(document.getElementById("password").value == "password") {
	document.getElementById("check").innerHTML = "ACCESS GRANTED"
}
	else {
		document.getElementById("check").innerHTML = "ACCESS DENIED"
	}
}
document.getElementById("verify").addEventListener("click", password1)
