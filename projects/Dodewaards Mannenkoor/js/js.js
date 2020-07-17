
function EnvisibleSection(sectName){
	var element = document.getElementById(sectName);
	element.style.visibility = "visible";
}

function Home{
	document.getElementById('sect__history').style.visibility = "hidden";
	document.getElementById('sect__board').style.visibility = "hidden";
	document.getElementById('sect__album').style.visibility = "hidden";
	document.getElementById('sect__becomemember').style.visibility = "hidden";
	document.getElementById('sect__sponser').style.visibility = "hidden";
	document.getElementById('sect__contact').style.visibility = "hidden";
}