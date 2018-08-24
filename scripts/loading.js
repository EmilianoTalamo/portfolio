window.onload = function() {
	document.body.style.overflow = "auto";
	var overlay = document.getElementById("overlay");
	overlay.style.opacity = 0;
	overlay.style.pointerEvents = "none";
	setTimeout(function() {
		document.body.removeChild(overlay); 
	}, 1500);
}