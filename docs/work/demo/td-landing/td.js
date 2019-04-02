var featimgs = document.getElementById("morefeatures").getElementsByTagName("img")[0];
var ol = document.getElementById("morefeatures").getElementsByTagName("div")[0].getElementsByTagName("ol")[0];

for(var i in ol.getElementsByTagName("li"))
{
	ol.getElementsByTagName("li")[i].onmouseover = function()
	{
		clearInterval(carouselauto);
		featimgs.src = "res/feature" + this.getElementsByTagName("span")[0].innerHTML + ".png";
	}
	ol.getElementsByTagName("li")[i].onmouseout = function()
	{
		carouselauto = setInterval(featcarousel, 2000);
	}
}

var currentimg = 1;
var carouselauto = setInterval(featcarousel, 5000)

function featcarousel()
{
	if(currentimg == 4)
	{
		currentimg = 1;
	}
	else
	{
		currentimg++;
	}
	featimgs.src = "res/feature" + currentimg + ".png";
}

document.getElementById("scrolldown").onclick = function()
{
	var mainpos = document.getElementsByTagName("main")[0].getBoundingClientRect();
	var scrolling = setInterval(function()
	{

		if(window.scrollY < mainpos.top)
		{
			document.documentElement.scrollTop += 50;
			document.body.scrollTop += 50;
		}
		else
		{
			clearInterval(scrolling);
		}
	}, 16);
}

window.onload = function()
{
	document.getElementsByTagName("video")[0].autoplay = true;
	document.getElementsByTagName("video")[0].play();
}

for(i in document.getElementById("screenshots").getElementsByTagName("img"))
{
	document.getElementById("screenshots").getElementsByTagName("img")[i].onclick = function()
	{
		var modal = document.body.appendChild(document.createElement("div"));
		modal.id = "modal";
		var ss = modal.appendChild(document.createElement("img"));
		ss.style.opacity = 0;
		ss.src = this.src.replace('thumbs','fullsize');
		var loading = modal.appendChild(document.createElement("img"));
		loading.src = "res/loading-spinner.gif";
		loading.id = "loading";
		ss.onload = function()
		{
			modal.removeChild(loading);
			ss.style.opacity = 1;
		};
		modal.onclick = function(e)
		{
			var evt = e || window.event;
			if(evt.target == this)
			{
				document.body.removeChild(this);
			}
		}
	};
}