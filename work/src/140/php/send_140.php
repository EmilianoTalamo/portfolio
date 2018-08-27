<?php
	require('config.php');

	$cientocuarenta = trim($_POST['cientocuarenta']);
	if(strlen($cientocuarenta) > 141 || $cientocuarenta == "") ## Si le pongo mayor a 140 no anda, whaaat???
	{
		$_SESSION['SEND_ERROR'] = true;
		header("Location: ../index.php" );
		die();
	}
	else
	{
		$query = <<<SQL
			INSERT INTO cientocuarentas
			SET
				FKUSER_ID = '$_SESSION[ID]',
				CONTENT = TRIM('$cientocuarenta'),
				DATE = NOW()
SQL;
		$sql_data = mysqli_query($cnx, $query);
		if(!$sql_data)
		{
			$_SESSION['SEND_ERROR'] = true;
			header("Location: ../index.php" );
			die();
		}
		else
		{
			$_SESSION['SEND_ERROR'] = false;
			header("Location: ../index.php");
		}
	}
?>
