<?php
	require('php/config.php');
	include('php/arrays.php');
	include('php/funciones.php');
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="Web informativa sobre el grupo humorístico musical de Argentina, Les Luthiers.">
	<meta name="keywords" content="Teatro,Comedia,Humor,Música,Agrupación,Banda">
	<meta name="author" content="Emiliano Tálamo">
	<meta name="theme-color" content="#E43D1D">
	<title>Les Luthiers</title>
	<link rel="shortcut icon" href="res/favicon.png" />
	<link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<div>
			<h1><a href="index.php?s=home">Les Luthiers</a></h1>
			<nav>
				<ul>
					<?php
						foreach( $botonera as $vinculo => $texto ){
							if( $vinculo == $s ){
								$seleccionado = ' class="active" ';
							}else{
								$seleccionado = '';
							}
							echo "<li><a $seleccionado href='index.php?s=$vinculo'>$texto</a></li>";
						}
					?>
				</ul>
			</nav>
		</div>
	</header>
	<main>
		<div id="container">
			<?php
				switch($s)
				{
					case 'home':
						include('templates/home.php');
						break;
					case 'galeria':
						include('templates/gallery.php');
						break;
					case 'comprar':
						include('templates/comprar.php');
						break;
						default:
						include('templates/404.php');
				}
			?>
		</div>
	</main>
	<footer>
		<div>
			<div>
				<span>&copy; 2017 - Maquetado y desarrollo por Emi Tálamo</span>
			</div>
			<div>
				<ul>
					<li><a href="https://www.facebook.com/LesLuthiersOficial" target="_blank" class="icon-facebook">Facebook</a></li>
					<li><a href="https://www.instagram.com/lesluthiers_oficial/" target="_blank" class="icon-instagram">Instagram</a></li>
					<li><a href="https://www.youtube.com/lesluthiers" target="_blank" class="icon-youtube-play">YouTube</a></li>
				</ul>
			</div>
		</div>
	</footer>
	<script>
		document.onkeyup = function(event)
		{
			if((document.getElementsByClassName("overlay")[0]) == null)
			{
				return false;
			}
			else if(event.keyCode == 27)
			{
				document.body.removeChild(document.getElementsByClassName("overlay")[0]);
			}
		}
	</script>
</body>
</html>