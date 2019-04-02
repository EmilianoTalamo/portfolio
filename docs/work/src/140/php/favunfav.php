<?php
	require("config.php");

	mysqli_query($cnx, "SELECT * FROM favs WHERE FKUSER_ID = '$_SESSION[ID]' AND FKCIENTOCUARENTA_ID = '$_GET[cc]'");
	$isfav = mysqli_affected_rows($cnx);

	if($isfav == 1)
	{
		$delquery = <<<SQL
		DELETE FROM
			favs
		WHERE
			FKUSER_ID='$_SESSION[ID]'
			AND
			FKCIENTOCUARENTA_ID = '$_GET[cc]'
SQL;
		mysqli_query($cnx, $delquery);
	}
	else
	{
		$insertquery = <<<SQL
		INSERT INTO favs (FKUSER_ID, FKCIENTOCUARENTA_ID)
		VALUES
		($_SESSION[ID], $_GET[cc])
SQL;
		mysqli_query($cnx, $insertquery);
	}
	header("Location: ../index.php?page=favs");
 ?>
