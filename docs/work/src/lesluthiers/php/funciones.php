<?php

function Desplegar_Galeria($categoria)
{
	global $instrumentos;
	echo "<h3>". $_GET['cat']. "</h3>";
	echo "<ul>";
	foreach($instrumentos[$categoria] as $indice => $valor)
	{
		$imgsrc = $instrumentos[$categoria][$indice]['pic'];
		$ins = $instrumentos[$categoria][$indice]['name'];
		echo "<li>";
		echo "<a href=\"index.php?s=galeria&cat=$categoria&i=$indice\">";
		echo "<div>";
		echo "<img src=\"$imgsrc\" alt=\"$ins\"/>";
		echo "<span>$ins</span>";
		echo "</div>";
		echo "</a></li>";
	}
	echo "</ul>";
}

function Desplegar_Info($categoria, $indice)
{
	global $instrumentos;
	$ins = $instrumentos[$categoria][$indice]['name'];
	$imgsrc = $instrumentos[$categoria][$indice]['pic'];
	$info = $instrumentos[$categoria][$indice]['info'];
	echo "<div id=\"info-container\"><div>";
	echo "<img src=\"$imgsrc\" alt='$ins'> </div>";
	echo "<div>";
	echo "<h3>$ins</h3>";
	echo "<p>$info</p>";
	echo "<a href='index.php?s=galeria&cat=$categoria'>Volver</a>";
	echo "</div></div>";
}

function validateform($datos)
{
	if( strlen($datos['nombre']) != 0 &&
			strlen($datos['apellido']) != 0 &&
			strlen($datos['mail']) != 0 &&
			strlen($datos['ciudad']) != 0 &&
			strlen($datos['direccion']) != 0 &&
			strlen($datos['cp']) != 0 &&
			isset($datos['dvdcb'])
	 )
		return true;
	else
		return false;
}

?>