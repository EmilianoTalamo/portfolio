<?php
	$followingquery = <<<SQL
		SELECT
		users.ID,
		users.NAME,
		users.HANDLE,
		users.BIO,
		follows.*
	FROM
		users, follows
	WHERE
		follows.FOLLOWSTHISUSER_ID = '$_SESSION[ID]'
		AND
		follows.THISUSER_ID = users.ID
		AND
		THISUSER_ID != FOLLOWSTHISUSER_ID
SQL;
	$query = mysqli_query($cnx, $followingquery);

	echo "<ul id='userlist'>";
	while(($user = mysqli_fetch_assoc($query)) != null)
	{
  	echo "<li>";
		echo "<a href='index.php?profile=$user[ID]'>";
		echo "<img src='res/profile_pics/$user[ID].jpg' alt='$user[NAME]'>";
		echo "<div><div>";
		echo "<p>$user[NAME]</p>";
		echo "<span>@$user[HANDLE]</span>";
		echo "</div>";
		echo "<p>$user[BIO]</p>";
		echo "</div></a></li>";
	}
	echo "</ul>";
?>
