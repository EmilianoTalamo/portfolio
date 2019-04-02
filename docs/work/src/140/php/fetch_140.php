<?php
	$profile = '';
	if(isset($_GET['profile']))
	{
		$query = <<<SQL
		SELECT
			u.ID AS USERID, u.HANDLE, u.NAME, c.*,
			DATE_FORMAT(DATE, '%d/%m/%Y') AS CC_DATE,
			DATE_FORMAT(DATE,'%H:%i') AS CC_TIME
		FROM
			cientocuarentas AS c,
			users AS u
		WHERE
			FKUSER_ID = $_GET[profile]
			AND
			u.ID = $_GET[profile]
		ORDER BY DATE DESC
SQL;
	$profile = "profile=$_GET[profile]&";
	}
	else if(!isset($_GET['tl']) || $_GET['tl'] == 'user')
	{
		$query = <<<SQL
		SELECT
			u.ID AS USERID, u.HANDLE, u.NAME, c.*, f.*,
			DATE_FORMAT(DATE, '%d/%m/%Y') AS CC_DATE,
			DATE_FORMAT(DATE,'%H:%i') AS CC_TIME
		FROM
			users AS u,
			cientocuarentas AS c,
			follows AS f

		WHERE
			f.THISUSER_ID = $_SESSION[ID]
			AND
				FKUSER_ID = u.ID
			AND
				FOLLOWSTHISUSER_ID = FKUSER_ID

			ORDER BY DATE DESC
SQL;
	}

	else
	{
		$query = <<<SQL
		SELECT
			u.ID AS USERID, u.HANDLE, u.NAME, c.*,
			DATE_FORMAT(DATE, '%d/%m/%Y') AS CC_DATE,
			DATE_FORMAT(DATE,'%H:%i') AS CC_TIME
		FROM
			users AS u,
			cientocuarentas AS c
		WHERE
			FKUSER_ID = u.ID
		ORDER BY DATE DESC
SQL;
	}

	$sql_data = mysqli_query($cnx, $query);
	if(mysqli_num_rows($sql_data) > 0)
	{
		echo "<ol>";
		foreach($sql_data as $i)
		{
			echo "<li><a href='index.php?".$profile."cc=$i[ID]'><div><img src='res/profile_pics/$i[FKUSER_ID]' alt='$i[HANDLE]'></div>";
			echo "<div><span>$i[NAME]</span> <span>@$i[HANDLE]</span>";
			echo "<p>$i[CONTENT]</p></div>";
			echo "<div><span>$i[CC_DATE]</span><span>$i[CC_TIME]</span></div></a></li>";
		}
		echo "</ol>";
	}
	else
	{
		echo "<p class='no-140'>No hay cientocuarentas disponibles :(</p>";
	}

?>
