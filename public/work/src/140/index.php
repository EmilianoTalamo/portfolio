<?php
	require('php/config.php');
	if(!isset($_SESSION['ID']))
	{
		header("Location: login.php");
		die();
	}
	include('php/fetch_follows.php');
	if($_SESSION['STATUS'] == 'NEW' && $_SESSION['redir'] == 0)
	{
		$_SESSION['redir'] = 1;
		header("Location: index.php?profile=".$_SESSION['ID']."&edit");
	}
	if($_SESSION['STATUS'] == 'INACTIVE')
	{
		$_SESSION['ERROR'] = "Su usuario se encuentra inactivo.";
		header("Location: login.php");
		die();
	}
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="140 es una red social que te permite conectar rápidamente con tus amigos gracias a la simplicidad de sus posteos.">
	<meta name="keywords" content="Social network, Friends, microblogging">
	<meta name="author" content="Emiliano Tálamo">
	<meta name="theme-color" content="#ffffff">
	<title>140</title>
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<nav>
		<ul>
			<li>
				<a href="index.php?profile=<?php echo $_SESSION['ID']; ?>">
					<img src="res/profile_pics/<?php echo "$_SESSION[ID]"; ?>.jpg" alt="<?php echo "$_SESSION[NAME]" ?>" id="avatar">
					<h1>@<?php echo "$_SESSION[HANDLE]" ?></h1>
				</a>
			</li>
			<li><a href="index.php">Timeline</a></li>
			<li><a href="index.php?page=followers"><?php echo $followers ?> Seguidor<?php if($followers != 1)echo "es";?></a></li>
			<li><a href="index.php?page=following"><?php echo $following ?> Siguiendo</a></li>
			<li><a href="index.php?page=favs">Tus favs</a></li>
			<!-- <li><a href="">TOP 140</a></li> -->
			<li><a href="index.php?page=about">Acerca de</a></li>

			<?php
				if($_SESSION['STATUS'] == "ADMIN")
					echo "<li><a href='./godmode'>GODMODE</a></li>";
			?>
			<li><a href="php/logout.php">Logout</a></li>
		</ul>
		<?php
			$banner = mysqli_fetch_assoc(mysqli_query($cnx,'SELECT * FROM banner WHERE ID = 1'));
			$bannersrc = $banner['PIC'];
			$bannerlink = $banner['LINK'];
		?>
		<a href="<?php echo $banner['LINK'] ?>"><img src="<?php echo "data:image/jpeg;base64,$bannersrc" ?>" alt="ad" id="ad-banner"></a>
	</nav>
	<main>
		<?php
			if(isset($_SESSION['SEND_ERROR']))
			{
				if($_SESSION['SEND_ERROR'])
				{
					echo "<span class='error'>Ha ocurrido un error al enviar el 140.</span>";
					unset($_SESSION['SEND_ERROR']);
				}
				else
				{
					echo "<span class='success'>El 140 se ha enviado con éxito.</span>";
					unset($_SESSION['SEND_ERROR']);
				}
			}
		?>
		<div>
		<?php
			if(isset($_GET['page']))
			{
				$page = $_GET['page'];
				switch($page)
				{
					case 'profile':
					case 'about':
					case 'favs':
					case 'following':
					case 'followers':
						include("templates/" . $page . ".php");
						break;
					default:
						include("templates/404.php");
				}
			}
			else if(isset($_GET['profile']))
			{
				include("templates/profile.php");
			}
			else
			{
				include("templates/home.php");
			}
			if(isset($_GET['cc']))
			{
				include("templates/cc.php");
			}
		?>
		</div>
		<?php unset($_SESSION['profile_update_error']); ?>
	</main>
</body>
</html>


<!-- TODO:
Mejorar la UI (colorcitos más lindos, animaciones e iconografía, por favor)
Favicon
Validar forms con JS
Alertas y dialogos que desaparezcan o con la posibilidad de cerrarlos
Los 140s no se mandan si tienen comillas (SANITIZAR INPUTS!!)
Marcar current page
Permitir la selección de texto de los CCs
Login desde user O mail
Preservar inputs cuando el login es erróneo
Al poner cualquier url en el get tl, mandarlo a TU TL, no a all
Encriptar contraseñas
Mejorar stats y grafiquitos
Meter regex en todos lados
Poder cambiar status de los usuarios desde el godmode
Pedir confirmación de borrado de CCs tanto como usuario como en el panel de admin
Mostrar mensaje cuando no hay followers/followings
Reposicionar ad porque está horrible ahí y en baja resolución tapa todo
Algunos inputs no están trimmeados
GDLibrary y verificar tipo de archivo -->
