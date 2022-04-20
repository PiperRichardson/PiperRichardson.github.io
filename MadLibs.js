var input  = document.getElementById("input");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var input8 = document.getElementById("input8");
var input9 = document.getElementById("input9");
var input10 = document.getElementById("input10");

function word() {
	document.getElementById("paragraph").innerHTML = "Our school cafeteria has really " + input.value + " food. Just thinking about it makes my stomach " + input1.value + ". The spaghetti is " + input2.value + " and tastes like " + input3.value + ". One day, I swear one of my meatballs started to " + input4.value + "! The turkey tacos are totally " + input5.value + " and look kind of like old " + input6.value + ". My friend Dana actually likes the meatloaf, even though it's " + input7.value + " and " + input8.value + ". I call it mystery meatloaf and think it's really made out of " + input9.value + ". My dad said he'd make my lunches, but the first day, he made me a sandwhich out of " + input10.value + " and peanut butter! I think I'd rather take my chances with the cafeteria!";
}

document.getElementById("button2").addEventListener("click", word);