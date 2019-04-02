<?php
	require("../../php/config.php");
	var_dump($_POST);
	$query = <<<SQL
	UPDATE
		cientocuarentas
	SET CONTENT = '$_POST[newcontent]'
	WHERE $_POST[id]
SQL;
	mysqli_query($cnx, $query);
	header("Location: ../index.php?page=ccs-edit");
?>
