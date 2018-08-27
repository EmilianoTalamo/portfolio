var text = document.getElementById("input_140");
var counter = document.getElementById("charcount");
var button = document.getElementById("send_140");

counter.innerHTML = 140 - text.value.length;

text.oninput = function()
{
	counter.innerHTML = 140 - text.value.length;
	if(counter.innerHTML < 0)
	{
		counter.style.color = "#F44336";
	}
	else
	{
		counter.style.color = "#222";
	}

	if(text.value.length > 140 || text.value.length == 0)
	{
		button.disabled = true;
	}
	else
	{
		button.disabled = false;
	}
}
