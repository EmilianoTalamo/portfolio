<?php
	include("../../php/config.php");
	if($_FILES['banner']['size'] > 0)
	{
		$banner = base64_encode(file_get_contents($_FILES['banner']['tmp_name']));
		$query = "UPDATE banner SET PIC = '$banner' WHERE ID = 1";
		mysqli_query($cnx, $query);
	}
	var_dump($_POST);
	mysqli_query($cnx, "UPDATE banner SET LINK = '$_POST[link]' WHERE ID = 1");
	header("Location: ../index.php?page=banner");
?>
