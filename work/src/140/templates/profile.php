<div id="wrapper140">
<?php

$profile = $_GET['profile'];

$query = <<<SQL
	SELECT
	HANDLE, NAME, BIO, STATUS, REGISTER_DATE,
	DATE_FORMAT(REGISTER_DATE,'%m') AS REGISTER_MONTH,
	DATE_FORMAT(REGISTER_DATE,'%Y') AS REGISTER_YEAR
FROM
	users
WHERE
	ID = '$profile'
SQL;

$user_data = mysqli_fetch_assoc(mysqli_query($cnx, $query));

if($user_data != null)
{

	$query = <<<SQL
		SELECT
			COUNT( FOLLOWSTHISUSER_ID ) AS FOLLOWERS
		FROM
			follows
		WHERE
			FOLLOWSTHISUSER_ID = $profile
				AND
			FOLLOWSTHISUSER_ID != THISUSER_ID
SQL;

	$user_data['FOLLOWERS'] = mysqli_fetch_assoc(mysqli_query($cnx, $query))['FOLLOWERS'];

	$query = <<<SQL
		SELECT
			COUNT(THISUSER_ID) AS FOLLOWING
		FROM
			follows
		WHERE
			THISUSER_ID = $profile
				AND
			FOLLOWSTHISUSER_ID != THISUSER_ID
SQL;

	$user_data['FOLLOWING'] = mysqli_fetch_assoc(mysqli_query($cnx, $query))['FOLLOWING'];

	$query = <<<SQL
		SELECT
			COUNT(ID) AS CC
		FROM
			cientocuarentas
		WHERE
			FKUSER_ID = $profile
SQL;

	$user_data['SENT'] = mysqli_fetch_assoc(mysqli_query($cnx, $query))['CC'];

	switch($user_data['REGISTER_MONTH'])
	{
		case('01'):
			$register_month = "enero";
			break;
		case('02'):
			$register_month = "febrero";
			break;
		case('03'):
			$register_month = "marzo";
			break;
		case('04'):
			$register_month = "abril";
			break;
		case('05'):
			$register_month = "mayo";
			break;
		case('06'):
			$register_month = "junio";
			break;
		case('07'):
			$register_month = "julio";
			break;
		case('08'):
			$register_month = "agosto";
			break;
		case('09'):
			$register_month = "septiembre";
			break;
		case('10'):
			$register_month = "octubre";
			break;
		case('11'):
			$register_month = "noviembre";
			break;
		case('12'):
			$register_month = "diciembre";
			break;
		default:
			$register_month = "desconocido";
	}


?>

	<div id="profileinfo">
		<div>
			<img src="./res/profile_pics/<?php echo $profile ?>.jpg" alt="">
			<script src="js/avatar_modal.js"></script>
		</div>
		<div>
			<h1><?php echo "$user_data[NAME]"?></h1>
			<h2>@<?php echo "$user_data[HANDLE]"?></h2>
			<p><?php echo "$user_data[BIO]"?></p>
			<span><?php echo "Usuario registrado en $register_month del $user_data[REGISTER_YEAR]"?></span>
		</div>
		<ul>
			<li><p><span><?php echo $user_data['FOLLOWERS']; ?></span> seguidor<?php if($user_data['FOLLOWERS']!=1) { echo "es"; }?></p></li>
			<li><p><span><?php echo $user_data['FOLLOWING']; ?></span> siguiendo</p></li>
			<li><p><span><?php echo $user_data['SENT'] ?></span> CCs enviados</p></li>
			<?php
			if($profile == $_SESSION['ID'])
			{
				echo "<li><a href='index.php?profile=".$_SESSION['ID']."&edit' class='edit'>Editar perfil</a></li>";
			}
			else if($user_data['STATUS'] == 'INACTIVE')
			{
				echo "<li><a href='' class='blocked'>Deshabilitado</a></li>";
			}
			else
			{
				$query = <<<SQL
					SELECT
					*
				FROM
					follows
				WHERE
					THISUSER_ID = $_SESSION[ID]
					AND
					FOLLOWSTHISUSER_ID = $profile
SQL;
				$btnlink = './php/fluf.php?user='.$_GET['profile'];
				if((mysqli_fetch_assoc((mysqli_query($cnx, $query))) == null ))
				{
					echo "<li><a href='$btnlink' class='follow'>Seguir</a></li>";
				}
				else
				{
					echo "<li><a href='$btnlink' class='unfollow'>Dejar de seguir</a></li>";
				}
			}
			?>
		</ul>
	</div>
	<?php include("./php/fetch_140.php"); ?>
	<?php }
	else
	{
		echo "<div id='profile-error'><p class='no-140'>No se ha encontrado el perfil solicitado.</p></div>";
	} ?>

	<?php
	if(isset($_GET['edit']))
	{
		include("templates/edit_profile.php");
	}
	?>
</div>
