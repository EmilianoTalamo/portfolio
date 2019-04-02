<?php
include("funciones.php");

if(validateform($_POST))
{
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$mail = $_POST['mail'];
	$ciudad = $_POST['ciudad'];
	$direccion = $_POST['direccion'];
	$cp = $_POST['cp'];
	$msj = $_POST['msj'];
	
	echo "<h1>Hola, $nombre $apellido</h1>";
	echo "<p>to: $mail</p>";
	echo "<hr>";
	echo "<p>Se ha efectuado una compra para $apellido, $nombre a entregar a la ciudad de $ciudad (CP $cp) en la calle $direccion.</p>";
	echo "<p>Los DVDs comprados son:</p>";
	echo "<ul>";
	foreach($_POST['dvdcb'] as $index => $titulo)
	{
		echo "<li>$titulo</li>";
	}
	echo "</ul>";
	if(strlen($msj) == 0)
	{
		echo "<p>No se ha dejado ninguna observación de compra.</p>";
	}
	else
	{
		echo "<p>Se ha dejado la siguente observación de compra: <br /> \"$msj\" ";
	}
}
else
{
	header("Location: ../index.php?s=comprar&err=1");
}
?>