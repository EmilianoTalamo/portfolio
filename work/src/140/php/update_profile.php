<?php
	require('../php/config.php');

$avatar = $_FILES['new_avatar'];

if( $avatar['size'] != 0)
{
	if(	$avatar['type'] != 'image/jpeg' ||
			$avatar['error'] != 0)
	{
		$_SESSION['profile_update_error'] = "El avatar seleccionado es inválido.";
	}
	else
	{
		$saveto ='../res/profile_pics/'.$_SESSION['ID'].'.jpg';
		$file_status = move_uploaded_file($avatar['tmp_name'], $saveto);
		if($file_status != true)
		{
			$_SESSION['profile_update_error'] = "Ha ocurrido un error con la carga del archivo.";
		}
	}
}

if( strlen($_POST['name']) < 1 || strlen($_POST['name']) > 20 )
{
	$_SESSION['profile_update_error'] = "El nombre ingresado es inválido.";
}
else if( strlen($_POST['bio']) < 1 || strlen($_POST['bio']) > 160 )
{
	$_SESSION['profile_update_error'] = "La bio es inválida.";
}
else
{
	$query = <<<SQL
	UPDATE
		users
	SET
		NAME = '$_POST[name]',
		BIO = '$_POST[bio]'
	WHERE
		ID = $_SESSION[ID]
SQL;

	$rta = mysqli_query($cnx, $query);
}
	if($_SESSION['STATUS'] == "NEW")
	{
		$query = <<<SQL
		UPDATE users SET STATUS = "ACTIVE" WHERE ID = $_SESSION[ID]
SQL;
		mysqli_query($cnx, $query);
		$_SESSION['STATUS'] = "ACTIVE";
	}
	header('Location: ../index.php?profile='.$_SESSION['ID'].'&edit');
?>
