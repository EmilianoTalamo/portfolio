<div id="wrapper140">
	<?php
		$fetch_favs_query = <<<SQL
		SELECT
		favs.*,
		users.ID,
		users.HANDLE,
		users.NAME,
		cientocuarentas.CONTENT,
		cientocuarentas.DATE,
		DATE_FORMAT(DATE, '%d/%m/%Y') AS DATE_D,
		DATE_FORMAT(DATE, '%H:%i') AS DATE_H
	FROM
		favs,
		users,
		cientocuarentas
	WHERE
		favs.FKUSER_ID = '$_SESSION[ID]'
		AND favs.FKCIENTOCUARENTA_ID = cientocuarentas.ID
		AND cientocuarentas.FKUSER_ID = users.ID
SQL;
		$query = mysqli_query($cnx, $fetch_favs_query);
		if(mysqli_affected_rows($cnx) == 0)
		{
			echo "<p class='no-140'>Aún no hay favs</p>";
		}
		else
		{
			echo "<ol>";
			while(($fav = mysqli_fetch_assoc($query)) != null)
			{
				echo "<li>";
				echo "<a href='index.php?cc=$fav[FKCIENTOCUARENTA_ID]'>";
				echo "<div><img alt='$fav[NAME]' src='res/profile_pics/".$fav['ID'].".jpg'></div>";
				echo "<div><span>$fav[NAME]</span> <span>@$fav[HANDLE]</span><p>$fav[CONTENT]</p></div>";
				echo "<div><span>$fav[DATE_D]</span><span>$fav[DATE_H]</span></div>";
				echo "</a>";
			}
			echo "</ol>";
		}
	?>
</div>
