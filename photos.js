

var b1 = document.getElementById("Loki1");
var b2 = document.getElementById("Loki2");
var b3 = document.getElementById("Loki3");
var b4 = document.getElementById("Loki4");
var b5 = document.getElementById("Loki5");
var b6 = document.getElementById("Arthur6");
var b7 = document.getElementById("Arthur7");
var b8 = document.getElementById("Loki8");
var b9 = document.getElementById("Loki9");
var b10 = document.getElementById("Loki10");
var image = document.getElementById("image");

function changeLoki1() {
	image.src = "IMG_5974.jpg";
}
function changeLoki2() {
	image.src = "IMG_5526.jpg";
}
function changeLoki3() {
	image.src = "IMG_6112.jpg";
}
function changeLoki4() {
	image.src = "IMG_6261.jpg";
}
function changeLoki5() {
	image.src = "IMG_6214.jpg";
}
function changeArthur6() {
	image.src = "IMG_6532.jpg";
}
function changeArthur7() {
	image.src = "IMG_5808.jpg";
}
function changeLoki8() {
	image.src = "SittingLoki.PNG";
}
function changeLoki9() {
	image.src = "WalkingLoki.PNG";
}
function changeLoki10() {
	image.src = "FloorLoki.PNG";
}
	
		
	
	
	
	
	

b1.addEventListener("click", changeLoki1);
b2.addEventListener("click", changeLoki2);
b3.addEventListener("click", changeLoki3);
b4.addEventListener("click", changeLoki4);
b5.addEventListener("click", changeLoki5);
b6.addEventListener("click", changeArthur6);
b7.addEventListener("click", changeArthur7);
b8.addEventListener("click", changeLoki8);
b9.addEventListener("click", changeLoki9);
b10.addEventListener("click", changeLoki10);