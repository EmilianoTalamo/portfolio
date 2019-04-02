<?php
	require("../php/config.php");
	if(isset($_SESSION['STATUS']))
	{
		if($_SESSION['STATUS'] != 'ADMIN')
		{
			header("Location: ../index.php");
		}
	}
	else
	{
		header("Location: ../index.php");
	}
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="Panel de administrador de Cientocuarenta">
	<meta name="keywords" content="Admin,Modo dios">
	<meta name="author" content="Emiliano Tálamo">
	<meta name="theme-color" content="#ffffff">
	<meta name="robots" content="noindex, nofollow" />
	<title>140 | ADMIN</title>
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" href="./css/godmode.css">
</head>
<body>
	<nav>
		<ul>
			<li><a href="index.php?page=stats">Estadísticas</a></li>
			<li><a href="index.php?page=banner">Editar banner</a></li>
			<li><a href="index.php?page=ccs-edit">Control de contenido</a></li>
			<li><a href="index.php?page=users">Vista de usuarios</a></li>
			<!-- <li><a href="#">Control de usuarios</a></li> -->
			<li><a href="../index.php">Volver a la web</a></li>
		</ul>
	</nav>
	<main>
		<div id="content">
		<?php
			if(isset($_GET['page']))
			{
				$page = $_GET['page'];
				switch($page)
				{
					case 'stats':
					case 'banner':
					case 'users':
					case 'ccs-edit':
					 include("sections/" . $page . ".php");
				 		break;
					default:
					 header("Location: index.php?page=stats");
				}
			}
			else
			{
				header("Location: index.php?page=stats");
			}
		?>
		</div>
	</main>
</body>
</html>
