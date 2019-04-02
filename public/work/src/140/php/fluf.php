<?php
	require('config.php');

	$thisuser = $_SESSION['ID'];
	$otheruser = $_GET['user'];

	if($thisuser == $otheruser)
	{
		header('Location: index.php');
	}
	else
	{
		$query = <<<SQL
		SELECT
			*
		FROM
			follows
		WHERE
			THISUSER_ID = $thisuser
				AND
			FOLLOWSTHISUSER_ID = $otheruser
SQL;
	mysqli_query($cnx, $query);
	if(mysqli_affected_rows($cnx) != 0)
	{ // UNFOLLOW
		$query = <<<SQL
		DELETE FROM
			follows
		WHERE
			THISUSER_ID = $thisuser AND FOLLOWSTHISUSER_ID = $otheruser
SQL;
	}
	else
	{ // FOLLOW
		$query = <<<SQL
		INSERT INTO follows (THISUSER_ID, FOLLOWSTHISUSER_ID)
		VALUES ($thisuser, $otheruser)
SQL;
	}
	var_dump($query);
	mysqli_query($cnx, $query);
	var_dump(mysqli_affected_rows($cnx));
	header('Location: ../index.php?profile='.$otheruser);
 }
?>
