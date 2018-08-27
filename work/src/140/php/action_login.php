<?php
	require('config.php');

	if(!isset($_POST['mail']) || !isset($_POST['pass']))
	{
		$_SESSION['ERROR'] = "Los campos no pueden estar vacíos.";
		header("Location: ../login.php");
		die();
	}

	$mail = trim($_POST['mail']);
	$password = trim($_POST['pass']);

	if($_POST['action'] == 'registrarse')
	{
		$username = trim($_POST['username']);
		register($mail, $password, $username, $cnx);
		login($mail, $password, $cnx);
	}
	else
	{
		login($mail, $password, $cnx);
	}

	function register($mail, $password, $username, $cnx)
	{
		$query = <<<SQL
			INSERT INTO users
			SET
				MAIL = TRIM('$mail'),
				HANDLE = LOWER(TRIM('$username')),
				NAME = TRIM('$username'),
				BIO = '140 está buenísimo!',
				PASSWORD = '$password',
				STATUS = 'NEW',
				REGISTER_DATE = NOW()
SQL;
		$sql_data = mysqli_query($cnx, $query);

		if(!$sql_data)
		{
			$_SESSION['ERROR'] = "El correo o el usuario ya existen.";
			header("Location: ../login.php");
			die();
		}
		$newuserid = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT ID FROM users WHERE MAIL = '$mail'"));
		copy("../res/default_avatar.jpg", "../res/profile_pics/$newuserid[ID].jpg");
	}

	function login($mail, $password, $cnx)
	{
		$query = <<<SQL
		SELECT * FROM users WHERE MAIL = TRIM('$mail')
SQL;
		$sql_data = mysqli_query($cnx, $query);
		$sql_array = mysqli_fetch_assoc($sql_data);
		if(!$sql_array || $sql_array['PASSWORD'] != $password)
		{
			$_SESSION['ERROR'] = "Mail o contraseña erróneos";
			header("Location: ../login.php");

			die();
		}
		else if($sql_array['STATUS'] == 'INACTIVE')
		{
			$_SESSION['ERROR'] = "Su cuenta se encuentra deshabilitada";
			header("Location: ../login.php");
			die();
		}
		else
		{
			$_SESSION['ID'] = $sql_array['ID'];
			$_SESSION['MAIL'] = $sql_array['MAIL'];
			$_SESSION['HANDLE'] = $sql_array['HANDLE'];
			$_SESSION['MAIL'] = $sql_array['MAIL'];
			$_SESSION['STATUS'] = $sql_array['STATUS'];
			$_SESSION['NAME'] = $sql_array['NAME'];
			$_SESSION['redir'] = 0;
			header("Location: ../index.php");
		}
	}
?>
