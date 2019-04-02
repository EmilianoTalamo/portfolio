document.querySelector("#profileinfo img").onclick = function()
{
	var modal = document.querySelector("main").appendChild(document.createElement("div"));
	modal.id = "modalbg";
	modal.appendChild(document.createElement("img"));
	document.querySelector("#modalbg img").src = this.src;
	modal.onclick = function()
	{
		document.querySelector("main").removeChild(this);
	}
}
