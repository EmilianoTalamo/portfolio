<?php
	require("config.php");

	$cctodelete = $_GET['cc'];

	mysqli_query($cnx, "SELECT * FROM cientocuarentas WHERE ID = '$cctodelete' AND FKUSER_ID = '$_SESSION[ID]'");

	if(mysqli_affected_rows($cnx) != 1)
	{
		header("Location: ../index.php"); # todo: agregar mensajito de error falopa
	}
	else
	{
		mysqli_query($cnx, "DELETE FROM cientocuarentas WHERE ID='$cctodelete' LIMIT 1");
		header("Location: ../index.php"); # mensajito de success
	}
	header("Location: ../index.php"); # mensajito de no sé que paso

 ?>
