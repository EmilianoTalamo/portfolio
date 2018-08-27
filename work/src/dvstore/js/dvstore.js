var currentcat = null;
var colorselectorpos;
var prodselect, colorselect, tamanioselect;
var total = 0;

function Mayusculaporfavor(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var leftcol = document.getElementById("leftcol");
var rightcol = document.getElementById("rightcol");
function Categorizar()
{
	window.scrollTo(0, 0);
	var i;
	for(i = 0 ; i < document.getElementById("leftcol").getElementsByTagName("ul")[0].getElementsByTagName("li").length ; i++)
	{
		document.getElementById("leftcol").getElementsByTagName("ul")[0].getElementsByTagName("li")[i].removeAttribute("style");
	}
	this.style.backgroundColor = "#212121";
	this.style.paddingLeft = "32px";
	document.getElementById("rightcol").style.opacity = "0";
	currentcat = this.innerHTML;
	var producto;
	rightcol.innerHTML = "";
	var banner = rightcol.appendChild(document.createElement("div"));
	banner.id = "banner";
	banner.appendChild(document.createElement("img"));
	var currentcatn;
	var j = 0;
	for(i in categoria)
	{
		if(i == currentcat)
		{
			currentcatn = j;
		}
		j++;
	}
	var rand = currentcatn;
	while(rand == currentcatn)
	{
		rand = Math.floor((Math.random()*4));
	}
	banner.getElementsByTagName("img")[0].src = "res/banners/banner" + rand + ".svg";
	banner.getElementsByTagName("img")[0].onclick = function()
	{
		document.getElementById("leftcol").getElementsByTagName("ul")[0].getElementsByTagName("li")[rand].click();
	}
	var bannerprogress = banner.appendChild(document.createElement("div"));
	bannerprogress.id = "progress";
	bannerprogress.style.width = "100%";
	var progress = setInterval(function()
	{
		bannerprogress.style.width = parseInt(bannerprogress.style.width) - 1 + "%";
		if(bannerprogress.style.width == "0%")
		{
			clearInterval(progress);
			banner.getElementsByTagName("img")[0].style.opacity = "0";
			setTimeout(function()
			{
				banner.getElementsByTagName("img")[0].src = "res/banners/banner.svg";
				banner.getElementsByTagName("img")[0].style.opacity = "1";
				banner.removeChild(banner.getElementsByTagName("div")[0]);
				banner.getElementsByTagName("img")[0].onclick = function()
				{
					return false; /* removeEventListener casero */
				}
			}, 100)
		}
	}, 100);
	rightcol.appendChild(document.createElement("h2"));
	rightcol.getElementsByTagName("h2")[0].innerHTML = Mayusculaporfavor(this.innerHTML);
	var productos = rightcol.appendChild(document.createElement("div"));
	productos.id = "productos";
	productos.style.paddingBottom = "64px";
	for(i in categoria[this.innerHTML])
	{
		producto = productos.appendChild(document.createElement("div"));
		producto.className = "prod";
		producto.id = i;
		producto.appendChild(document.createElement("img"));
		producto.getElementsByTagName("img")[0].src = "res/productos/" + this.innerHTML + "/" + i + "/foto.jpg";
		producto.appendChild(document.createElement("p"));
		producto.appendChild(document.createElement("p"));
		producto.appendChild(document.createElement("p"));
		producto.appendChild(document.createElement("span"));
		producto.getElementsByTagName("p")[0].innerHTML = categoria[this.innerHTML][i].titulo;
		producto.getElementsByTagName("p")[2].innerHTML = "$ " + categoria[this.innerHTML][i].precio + ".00.-";
		producto.getElementsByTagName("p")[1].innerHTML = categoria[this.innerHTML][i].descripcion;
		producto.getElementsByTagName("span")[0].innerHTML = "Ver producto";
		producto.onclick = Preview;
	}
	var fadein = setInterval(function()
	{
		document.getElementById("rightcol").style.opacity = parseFloat(document.getElementById("rightcol").style.opacity) + 0.1;
		if(parseFloat(document.getElementById("rightcol").style.opacity) >= 1)
		{
			clearInterval(fadein);
		}
	}, 16);
}

function Preview()
{
	var i, colorcito, dib;
	prodselect = this.getElementsByTagName("p")[0].innerHTML;
	colorselect = null;
	tamanioselect = "";
	cantselect = "1";
	window.addEventListener("keyup", RemovePreviewConEsc);
	document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).id = "preview";
	document.getElementById("preview").style.opacity = 0;
	var fadelindo = setInterval(function()
	{
		document.getElementById("preview").style.opacity = parseFloat(document.getElementById("preview").style.opacity) + 0.1;
		if(parseFloat(document.getElementById("preview").style.opacity) >= 1)
		{
			clearInterval(fadelindo);
		}
	}, 10);
	document.getElementById("preview").onclick = function(e)
	{
		var evt = e || window.event;
		if(evt.target == document.getElementById("preview"))
		{
			RemovePreview();
		}
	};
	var previewmodal = document.getElementById("preview").appendChild(document.createElement("div"));
	previewmodal.id = "previewcontainer";
	previewmodal.appendChild(document.createElement("span")).id="closepreview";
	document.getElementById("closepreview").onclick = function()
	{
		RemovePreview();
	};
	previewmodal.appendChild(document.createElement("div")).id="gallery";
	var gallery = document.getElementById("gallery");
	var bigpicture = gallery.appendChild(document.createElement("img"));
	bigpicture.src = categoria[currentcat][this.id].fotos[0];
	gallery.appendChild(document.createElement("div")).id="thumbs";
	for(i in categoria[currentcat][this.id].fotos)
	{
		thumbnail = document.getElementById("thumbs").appendChild(document.createElement("img"));
		thumbnail.src = categoria[currentcat][this.id].fotos[i];
		thumbnail.onclick = function()
		{
			bigpicture.src = this.src;
		}
	}
	buymenu = previewmodal.appendChild(document.createElement("div"));
	buymenu.id="buymenu";
	buymenu.appendChild(document.createElement("h2"));
	buymenu.getElementsByTagName("h2")[0].innerHTML = this.getElementsByTagName("p")[0].innerHTML;
	buymenu.appendChild(document.createElement("p"));
	buymenu.getElementsByTagName("p")[0].innerHTML = this.getElementsByTagName("p")[1].innerHTML;
	buymenu.appendChild(document.createElement("span"));
	buymenu.getElementsByTagName("span")[0].innerHTML = this.getElementsByTagName("p")[2].innerHTML;
	buymenu.appendChild(document.createElement("hr"));
	if(categoria[currentcat][this.id].color)
	{
		buymenu.appendChild(document.createElement("h2")).innerHTML = "Color:";
		buymenu.appendChild(document.createElement("div")).id = "colores";
		for(i in categoria[currentcat][this.id].colores)
		{
			colorcito = ToHex(categoria[currentcat][this.id].colores[i]);
			dib = document.getElementById("colores").appendChild(document.createElement("div"));
			if(colorcito != "none")
			{
				dib.style.backgroundImage = "none";
				dib.style.backgroundColor = colorcito;
			}
			dib.title = categoria[currentcat][this.id].colores[i];
			dib.onclick = function()
			{
				colorselectorpos.removeChild(document.getElementById("colorselector"));
				colorselect = this.title;
				this.appendChild(document.createElement("div")).id = "colorselector";
				colorselectorpos = this;
			};
		}
		document.getElementById("colores").getElementsByTagName("div")[0].appendChild(document.createElement("div")).id = "colorselector";
		colorselectorpos = document.getElementById("colores").getElementsByTagName("div")[0];
		colorselect = document.getElementById("colores").getElementsByTagName("div")[0].title;
	}
	if(categoria[currentcat][this.id].sizes)
	{
		buymenu.appendChild(document.createElement("h2")).innerHTML = "Tamaño:";
		buymenu.appendChild(document.createElement("select")).id = "tamanios";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "XS";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "S";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "M";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "L";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "XL";
		document.getElementById("tamanios").appendChild(document.createElement("option")).innerHTML = "XXL";
		tamanioselect = "XS";
		document.getElementById("tamanios").onchange = function()
		{
			tamanioselect = document.getElementById("tamanios").selectedIndex;
			switch (tamanioselect)
			{
				case 0:
					tamanioselect = "XS";
					break;
				case 1:
					tamanioselect = "S";
					break;
				case 2:
					tamanioselect = "M";
					break;
				case 3:
					tamanioselect = "L";
					break;
				case 4:
					tamanioselect = "XL";
					break;
				case 5:
					tamanioselect = "XXL";
			}
		};
	}
	buymenu.appendChild(document.createElement("h2")).innerHTML = "Cantidad:";
	var cant = buymenu.appendChild(document.createElement("input"));
	cant.id = "cantidad";
	cant.type = "number";
	cant.min = "1";
	cant.value = "1";
	buymenu.appendChild(document.createElement("button")).innerHTML = "Agregar al carrito";
	buymenu.getElementsByTagName("button")[0].onclick = AddToCart;
}

function RemovePreviewConEsc(e)
{
	var evt = e || window.event;
	if(evt.keyCode == 27)
	{
		RemovePreview();
	}
}

function RemovePreview()
{
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("preview"));
	window.removeEventListener("keyup", RemovePreviewConEsc);
}

for(var i in categoria)
{
	var li = leftcol.getElementsByTagName("ul")[0].appendChild(document.createElement("li"));
	li.innerHTML = i;
	li.onclick = Categorizar;
}

document.getElementById("cartstatus").getElementsByTagName("div")[0].onclick = function()
{
	if(document.getElementById("cartstatus").style.bottom == "-450px") /*Abrir*/
	{
		document.getElementById("cartstatus").style.bottom = "0";
		document.getElementById("cartopen").style.backgroundImage = "url(res/cart-close.svg)";
	}
	else /*Cerrar */
	{
		document.getElementById("cartstatus").style.bottom = "-450px";
		document.getElementById("cartopen").style.backgroundImage = "url(res/cart-open.svg)";
	}
};

var carrito = [];
var carritoprods = 0;

function AddToCart()
{
	if(isNaN(document.getElementById("cantidad").value) || document.getElementById("cantidad").value == "" || document.getElementById("cantidad").value < 0)
	{
		console.log("ERROR");
		RemovePreview();
		return false;
	}
	yaexiste = 0;
	var producto = prodselect;
	if(colorselect != null)
	{
		producto += " " + colorselect;
	}
	producto += " " + tamanioselect;
	var yaexiste, endondeexiste;
	for(var i in carrito)
	{
		if(carrito[i].producto == producto)
		{
			yaexiste = 1;
			endondeexiste = i;
		}
	}
	if(yaexiste == 1)
	{
		carrito[endondeexiste].cantidad = parseInt(carrito[endondeexiste].cantidad) + parseInt(document.getElementById("cantidad").value);
	}
	else
	{
	carrito[carritoprods] = { };
	carrito[carritoprods].producto = producto;
	carrito[carritoprods].cantidad = document.getElementById("cantidad").value;
	carrito[carritoprods].precio = this.parentNode.getElementsByTagName("span")[0].innerHTML;
	var index = carrito[carritoprods].precio.indexOf('.',0);
	carrito[carritoprods].precio = carrito[carritoprods].precio.substring(2,index);
	carrito[carritoprods].foto = document.getElementById("gallery").getElementsByTagName("div")[0].getElementsByTagName("img")[0].src;
	}
	RefreshCart();
	document.getElementById("cartstatus").style.bottom = "0";
	document.getElementById("cartopen").style.backgroundImage = "url(res/cart-close.svg)";
	RemovePreview();
}

function RefreshCart()
{
	total = 0;
	carritoprods = carrito.length;
	cart = document.getElementById("cart");
	cart.innerHTML = "";
	for(i in carrito)
	{
		cart.appendChild(document.createElement("div")).dataset.pos = i;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("img"));
		cart.getElementsByTagName("img")[i].src = carrito[i].foto;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("p")).innerHTML = carrito[i].producto;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("p")).innerHTML = "$" + carrito[i].precio;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("p")).innerHTML = carrito[i].cantidad;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("p")).innerHTML = "$" + carrito[i].precio * carrito[i].cantidad;
		cart.getElementsByTagName("div")[i].appendChild(document.createElement("span")).onclick = DeleteFromCart;
		total = total + parseFloat(cart.getElementsByTagName("div")[i].getElementsByTagName("p")[3].innerHTML.substring(1));
	}
	document.getElementById("q").innerHTML = carritoprods;
	if(document.getElementById("q").innerHTML == "1")
	{
		document.getElementById("l").innerHTML = "producto";
	}
	else
	{
		document.getElementById("l").innerHTML = "productos";
	}
	document.getElementById("m").innerHTML = "$ " + total + ".-";
	if(carrito.length > 0)
	{
		document.getElementById("cartstatus").getElementsByTagName("button")[0].disabled = false;
		document.getElementById("cartstatus").getElementsByTagName("button")[1].disabled = false;
	}
	else
	{
		document.getElementById("cartstatus").getElementsByTagName("button")[0].disabled = true;
		document.getElementById("cartstatus").getElementsByTagName("button")[1].disabled = true;
	}
}

function DeleteFromCart()
{
	var itemtodelete = this.parentNode.getAttribute("data-pos");
	carrito.splice(itemtodelete,1);
	RefreshCart();
}

document.getElementById("cartstatus").getElementsByTagName("button")[0].onclick = function()
{
	window.addEventListener("keyup", RemovePreviewConEsc)
	document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).id = "preview";
	document.getElementById("preview").onclick = function(e)
	{
		var evt = e || window.event;
		if(evt.target == document.getElementById("preview"))
		{
			RemovePreview();
		}
	};
	var previewmodal = document.getElementById("preview").appendChild(document.createElement("div"));
	previewmodal.id = "previewcontainer";
	previewmodal.style.width = "320px";
	previewmodal.style.height = "160px";
	previewmodal.appendChild(document.createElement("p")).innerHTML = "Desea vaciar el carrito?";
	previewmodal.getElementsByTagName("p")[0].className = "confirmdialog";
	previewmodal.appendChild(document.createElement("div")).id = "buttoncontainer";
	document.getElementById("buttoncontainer").appendChild(document.createElement("button")).innerHTML = "No";
	document.getElementById("buttoncontainer").appendChild(document.createElement("button")).innerHTML = "Sí";
	document.getElementById("buttoncontainer").getElementsByTagName("button")[1].focus();
	document.getElementById("buttoncontainer").getElementsByTagName("button")[0].className = "bad";
	document.getElementById("buttoncontainer").getElementsByTagName("button")[1].className = "good";
	document.getElementById("buttoncontainer").getElementsByTagName("button")[0].onclick = function(){ RemovePreview(); };
	document.getElementById("buttoncontainer").getElementsByTagName("button")[1].onclick = function(){ RemovePreview(); carrito = []; RefreshCart(); };
};

document.getElementById("cartstatus").getElementsByTagName("button")[1].onclick = Checkout;
var userdata = [];

function Checkout()
{
	window.addEventListener("keyup", RemovePreviewConEsc)
	document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).id = "preview";
	document.getElementById("preview").onclick = function(e)
	{
		var evt = e || window.event;
		if(evt.target == document.getElementById("preview"))
		{
			RemovePreview();
		}
	};
	var previewmodal = document.getElementById("preview").appendChild(document.createElement("div"));
	previewmodal.style.width = "500px";
	previewmodal.style.height = "680px";
	previewmodal.style.transform = "scale(0.25)";
	previewmodal.id = "previewcontainer";
	setTimeout(function()
	{
		previewmodal.style.transform = "scale(1)";
	}, 16);
	previewmodal.appendChild(document.createElement("span")).id="closepreview";
	previewmodal.appendChild(document.createElement("div")).id = "checkout";
	var checkout = document.getElementById("checkout");
	checkout.appendChild(document.createElement("h2")).innerHTML = "Checkout";
	checkout.appendChild(document.createElement("h3")).innerHTML = "Datos de contacto";
	var currentdiv, currentspan, currentselect;
	for(var i=0; i < 6 ; i++)
	{
		currentdiv = checkout.appendChild(document.createElement("div"));
		currentspan = currentdiv.appendChild(document.createElement("span"));
		switch(i)
		{
			case 0:
				currentspan.innerHTML = "Dirección de mail";
				break;
			case 1:
				currentspan.innerHTML = "Teléfono";
				break;
			case 2:
				currentspan.innerHTML = "Nombre y Apellido";
				break;
			case 3:
				currentspan.innerHTML = "Provincia";
				break;
			case 4:
				currentspan.innerHTML = "Dirección";
				break;
			case 5:
				currentspan.innerHTML = "Código Postal";
				break;
		}
		if(i!=3)
		{
			currentdiv.appendChild(document.createElement("input")).type = "text";
		}
		else
		{
			currentselect = currentdiv.appendChild(document.createElement("select"));
			currentselect.appendChild(document.createElement("option")).innerHTML = "Buenos Aires";
			currentselect.appendChild(document.createElement("option")).innerHTML = "CABA";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Catamarca";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Chaco";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Chubut";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Córdoba";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Córrientes";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Entre ríos";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Formosa";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Jujuy";
			currentselect.appendChild(document.createElement("option")).innerHTML = "La Pampa";
			currentselect.appendChild(document.createElement("option")).innerHTML = "La Rioja";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Mendoza";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Misiones";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Neuquén";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Río Negro";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Salta";
			currentselect.appendChild(document.createElement("option")).innerHTML = "San Juan";
			currentselect.appendChild(document.createElement("option")).innerHTML = "San Luis";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Santa Cruz";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Santa Fe";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Santiago Del Estero";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Tierra Del Fuego";
			currentselect.appendChild(document.createElement("option")).innerHTML = "Tucumán";
		}
	}
	document.getElementById("closepreview").onclick = function()
	{
		RemovePreview();
	};
	checkout.getElementsByTagName("div")[0].getElementsByTagName("input")[0].focus();
	nextbtn = checkout.appendChild(document.createElement("div")).appendChild(document.createElement("button"));
	checkout.addEventListener("keydown", Next, false);
	nextbtn.onclick = function()
	{
		var invalid = false;
		var datatocheck;
		var checkout = this.parentNode.parentNode;
		datatocheck = checkout.getElementsByTagName("div")[0].getElementsByTagName("input")[0].value;
		var mail = datatocheck.split("@");
		if(mail.length == 2)
		{
			var dominio = mail[1].split(".");
			if(dominio.length == 2 || dominio.length == 3)
			{
				checkout.getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.borderColor = "#ccc";
				userdata.mail = datatocheck;
			}
			else
			{
				invalid = true;
				checkout.getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.borderColor = "red";
			}
		}
		else
		{
			invalid = true;
			checkout.getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.borderColor = "red";
		}

		datatocheck = checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].value;
		if(isNaN(datatocheck) || datatocheck == "" || datatocheck.length < 6)
		{
			invalid = true;
			checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "red";
		}
		else
		{
			checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "#ccc";
			userdata.tel = datatocheck;
		}

		datatocheck = checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].value;
		if(datatocheck == "")
		{
			invalid = true;
			checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].style.borderColor = "red";
		}
		else
		{
			checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].style.borderColor = "#ccc";
			userdata.name = datatocheck;
		}

		datatocheck = checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].value;
		if(datatocheck == "")
		{
			invalid = true;
			checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].style.borderColor = "red";
		}
		else
		{
			checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].style.borderColor = "#ccc";
			userdata.address = datatocheck;
		}

		datatocheck = checkout.getElementsByTagName("div")[5].getElementsByTagName("input")[0].value;
		if(isNaN(datatocheck) || datatocheck == "" || datatocheck < 4)
		{
			invalid = true;
			checkout.getElementsByTagName("div")[5].getElementsByTagName("input")[0].style.borderColor = "red";
		}
		else
		{
			checkout.getElementsByTagName("div")[5].getElementsByTagName("input")[0].style.borderColor = "#ccc";
			userdata.cp = datatocheck;
		}
		if(invalid)
		{
			if(checkout.getElementsByTagName("div")[6].getElementsByTagName("p")[0] == undefined)
			{
			checkout.getElementsByTagName("div")[6].appendChild(document.createElement("p")).innerHTML = "Por favor, verifique los campos marcados en rojo";
			}
		}
		else
		{
			userdata.prov = checkout.getElementsByTagName("div")[3].getElementsByTagName("select")[0].value;
			for(i=0 ; i < 7 ; i++)
			{
				checkout.removeChild(checkout.getElementsByTagName("div")[0]);
			}
			checkout.parentNode.style.height = "600px";
			checkout.getElementsByTagName("h3")[0].innerHTML = "Información de pago";
			for(i=0 ; i < 5 ; i++)
			{
				currentdiv = checkout.appendChild(document.createElement("div"));
				switch(i)
				{
					case 0:
						currentdiv.appendChild(document.createElement("span")).innerHTML = "Tarjeta";
						break;
					case 1:
						currentdiv.appendChild(document.createElement("span")).innerHTML = "Número de tarjeta";
						break;
					case 2:
						currentdiv.appendChild(document.createElement("span")).innerHTML = "Válido hasta";
						break;
					case 3:
						currentdiv.appendChild(document.createElement("span")).innerHTML = "Nombre del titular";
						break;
					case 4:
						currentdiv.appendChild(document.createElement("span")).innerHTML = "CVV";
						break;
				}
			}
			currentselect = checkout.getElementsByTagName("div")[0].appendChild(document.createElement("select"));
			currentselect.appendChild(document.createElement("option")).innerHTML = "Visa";
			currentselect.appendChild(document.createElement("option")).innerHTML = "MasterCard";
			currentselect.appendChild(document.createElement("option")).innerHTML = "American Express";

			checkout.getElementsByTagName("div")[1].appendChild(document.createElement("input")).type = "text";

			checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].focus();

			if(navigator.userAgent.indexOf('Trident') == -1)
			{ 
				checkout.getElementsByTagName("div")[2].appendChild(document.createElement("input")).type = "month";
			}
			else
			{
				checkout.getElementsByTagName("div")[2].appendChild(document.createElement("input")).type = "text";
			}

			checkout.getElementsByTagName("div")[3].appendChild(document.createElement("input")).type = "text";

			checkout.getElementsByTagName("div")[4].appendChild(document.createElement("input")).type = "text";

			nextbtn = checkout.appendChild(document.createElement("div")).appendChild(document.createElement("button"));
			nextbtn.onclick = function()
			{
				invalid = false;
				datatocheck = checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].value;
				if(isNaN(datatocheck) || datatocheck == "" || datatocheck.length < 12)
				{
					invalid = true;
					checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "red";
				}
				else
				{
					checkout.getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "#ccc";
					userdata.cardnumber = datatocheck;
				}

				datatocheck = checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].value;
				if(datatocheck == "")
				{
					invalid = true;
					checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].style.borderColor = "red";
				}
				else
				{
					checkout.getElementsByTagName("div")[2].getElementsByTagName("input")[0].style.borderColor = "#ccc";
					userdata.cardexpire = datatocheck;
				}

				datatocheck = checkout.getElementsByTagName("div")[3].getElementsByTagName("input")[0].value;
				if(datatocheck == "")
				{
					invalid = true;
					checkout.getElementsByTagName("div")[3].getElementsByTagName("input")[0].style.borderColor = "red";
				}
				else
				{
					checkout.getElementsByTagName("div")[3].getElementsByTagName("input")[0].style.borderColor = "#ccc";
					userdata.cardname = datatocheck;
				}

				datatocheck = checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].value;
				if(isNaN(datatocheck) || datatocheck == "")
				{
					invalid = true;
					checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].style.borderColor = "red";
				}
				else
				{
					checkout.getElementsByTagName("div")[4].getElementsByTagName("input")[0].style.borderColor = "#ccc";
					userdata.cardcvv = datatocheck;
				}

				if(invalid)
				{
					if(checkout.getElementsByTagName("div")[5].getElementsByTagName("p")[0] == undefined)
					{
					checkout.getElementsByTagName("div")[5].appendChild(document.createElement("p")).innerHTML = "Por favor, verifique los campos marcados en rojo";
					}
				}
				else
				{
					userdata.card = checkout.getElementsByTagName("div")[0].getElementsByTagName("select")[0].value;
					for(i=0 ; i < 6 ; i++)
					{
						checkout.removeChild(checkout.getElementsByTagName("div")[0]);
					}
					checkout.parentNode.style.height = "600px";
					checkout.parentNode.style.width = "800px";
					checkout.getElementsByTagName("h3")[0].innerHTML = "Resumen";

					checkout.appendChild(document.createElement("div")).id = "tabla";

					var tabladiv = document.getElementById("tabla");

					var tr;
					var tabla = tabladiv.appendChild(document.createElement("table"));
					tr = tabla.appendChild(document.createElement("tr"));
					tr.appendChild(document.createElement("th")).innerHTML = "Producto";
					tr.appendChild(document.createElement("th")).innerHTML = "Cantidad";
					tr.appendChild(document.createElement("th")).innerHTML = "Precio";
					tr.appendChild(document.createElement("th")).innerHTML = "Subtotal";
					for(i=0 ; i < carrito.length ; i++)
					{
						tr = tabla.appendChild(document.createElement("tr"));
						tr.appendChild(document.createElement("td")).innerHTML = carrito[i].producto;
						tr.appendChild(document.createElement("td")).innerHTML = carrito[i].cantidad;
						tr.appendChild(document.createElement("td")).innerHTML = "$ " + carrito[i].precio + ".-";
						tr.appendChild(document.createElement("td")).innerHTML = "$ " + carrito[i].precio * carrito[i].cantidad + ".-";
					}
					checkout.appendChild(document.createElement("span")).id = "total";
					document.getElementById("total").innerHTML = "Total: $ " + total + ".-";

					checkout.appendChild(document.createElement("p")).innerHTML = userdata.name;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.mail;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.tel;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.prov + ", " + userdata.cp;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.address;
					checkout.appendChild(document.createElement("hr"));
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.cardname;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.card;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.cardnumber + " / " + userdata.cardcvv;
					checkout.appendChild(document.createElement("p")).innerHTML = userdata.cardexpire;
					nextbtn = checkout.appendChild(document.createElement("input"));
					nextbtn.type = "button";
					nextbtn.value = "Realizar compra";

					nextbtn.onclick = function()
					{
						document.getElementsByTagName("body")[0].removeChild(document.getElementById("preview"));
						rightcol.innerHTML = "";
						document.getElementById("cartstatus").style.bottom = "-450px";
						document.getElementById("cartopen").style.backgroundImage = "url(res/cart-open.svg)";
						carrito = [];
						userdata = [];
						RefreshCart();
						rightcol.appendChild(document.createElement("div")).id = "done";
						document.getElementById("done").appendChild(document.createElement("img"));
						document.getElementById("done").appendChild(document.createElement("p"));
						document.getElementById("done").getElementsByTagName("img")[0].src = "res/check.svg";
						document.getElementById("done").getElementsByTagName("p")[0].innerHTML = "¡Su compra ha sido realizada con éxito!";
					}


				}
			};
		}
	};
}

var nextbtn;
function Next(e)
{
	var evt = e || window.event;
	if(evt.keyCode == 13)
	{
		nextbtn.click();
	}
}

function ToHex(colorcito)
{
	switch(colorcito)
	{
		case "Negro":
			return "#222222";
			break;
		case "Blanco":
			return "#E0E0E0";
			break;
		case "Rojo":
			return "#B71C1C";
			break;
		case "Verde":
			return "#2E7D32";
			break;
		case "Azul":
			return "#283593";
			break;
		case "Violeta":
			return "#673AB7";
			break;
		case "Rosa":
			return "#FF80AB";
			break;
		case "Celeste":
			return "#4FC3F7";
			break;
		case "Amarillo":
			return "#FFD600";
			break;
		case "Naranja":
			return "#FB8C00";
			break;
		case "Gris":
			return "#9E9E9E";
			break;
		case "Marron":
			return "#795548";
			break;
		default:
			return "none";
	}
}