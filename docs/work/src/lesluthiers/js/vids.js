/* thumb = https://img.youtube.com/vi/jHCnxDFa9Nw/0.jpg */

const id = ["jHCnxDFa9Nw", "N79NAo8H1oo", "g28Hq3Sx7D4", "Dm-m5TXocTc", "2BD7bNfMcRE", "so1ThIJd3ag", "bR7z69qdeDk", "SngX9awG9jg"];

vids = document.getElementById("videos").getElementsByTagName("ul")[0].getElementsByTagName("li");

for(i in id)
{
	let index = i;
	vids[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0].src = "https://img.youtube.com/vi/" + id[i] + "/0.jpg";
	vids[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0].onclick = function(event)
	{
		PopupVid(index);
	}
}

function PopupVid(index)
{
	document.body.appendChild(document.createElement("div")).className = "overlay";
	document.getElementsByClassName("overlay")[0].appendChild(document.createElement("iframe")).id = "vidplayback";
	vidplayback.width = "800";
	vidplayback.height = "450";
	vidplayback.src = "https://www.youtube.com/embed/" + id[index] + "?rel=0&autoplay=1";
	vidplayback.frameborder = "0";
	document.getElementsByClassName("overlay")[0].onclick = function(event)
	{
		if(event.target == document.getElementsByClassName("overlay")[0])
		{
			document.body.removeChild(document.getElementsByClassName("overlay")[0]);
		}
	}
}