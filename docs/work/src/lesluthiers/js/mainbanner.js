const interval = 5000;

var pic1 = document.getElementById("mainbanner-1");
var pic2 = document.getElementById("mainbanner-2");

pic1.style.backgroundImage = "url(\"res/mainbanner/1.jpg\")";
pic2.style.opacity = 0;
var currentpic = 1;
var currentbanner = pic1;

setInterval(function()
{
	currentbanner.style.opacity = 0;
	(currentpic != 3) ? currentpic += 1 : currentpic = 1;
	(currentbanner == pic1) ? currentbanner = pic2 : currentbanner = pic1;
	currentbanner.style.backgroundImage = "url(\"res/mainbanner/" + currentpic + ".jpg\")";
	currentbanner.style.opacity = 1;
}, interval);