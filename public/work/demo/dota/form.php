<?php

header("Location: gracias.html#sorteobg");

$steamid = $_POST['steamid'];
$heroe = $_POST['heroe'];
$rol = $_POST['rol'];
$equipo = $_POST['equipo'];
$dir = 'php';

$archivo = fopen($dir."/".$steamid.".txt", "w");
fwrite($archivo, "SteamID: $steamid \n");
fwrite($archivo, "Heroe: $heroe \n");
fwrite($archivo, "Roles: ");
foreach($rol as $check)
{
	fwrite($archivo, $check . ' ');
}
fwrite($archivo, "\nFacción: $equipo");

$foto = $_FILES["ss"]["tmp_name"];
move_uploaded_file($foto, $dir."/".$steamid.".jpg");

?>
