<?php
	$query = <<<SQL
	SELECT
		*,
		DATE_FORMAT(DATE,'%d/%m/%Y - %h:%i') AS CC_DATE
	FROM
		cientocuarentas
	WHERE
	 ID = $_GET[cc]
SQL;

	$sql_data = mysqli_query($cnx, $query);
	if(mysqli_num_rows($sql_data) != 1)
	{
		header("Location: index.php");
		die();
	}
	else
	{
		$cc_data = mysqli_fetch_assoc($sql_data);
		$query = <<<SQL
			SELECT NAME, HANDLE
			FROM users WHERE ID = $cc_data[FKUSER_ID]
SQL;
		$cc_user_data = mysqli_fetch_assoc(mysqli_query($cnx, $query));
?>

<div id="modalbg">
	<div id="modal" class="modal-cc">
		<div id="modal-title">
			<a href="index.php?<?php echo $profile; ?>">&times;</a>
		</div>
		<div>
			<div>
				<div><a href="index.php?profile=<?php echo $cc_data['FKUSER_ID']?>">
					<img src="res/profile_pics/<?php echo $cc_data['FKUSER_ID']?>" alt="<?php echo $cc_user_data['NAME']?>">
				</a></div>
				<div>
					<a href="index.php?profile=<?php echo $cc_data['FKUSER_ID']?>">
						<span><?php echo $cc_user_data['NAME'] ?></span>
						<span>@<?php echo $cc_user_data['HANDLE'] ?></span>
					</a>
				</div>
				<div>
					<?php
						if($cc_data['FKUSER_ID'] == $_SESSION['ID'])
						{
							echo "<a class='cc-btn cc-btn-del' href='php/deletecc.php?cc=$_GET[cc]'>Borrar</a>";
						}
						else
						{
							mysqli_query($cnx, "SELECT * FROM favs WHERE FKUSER_ID = '$_SESSION[ID]' AND FKCIENTOCUARENTA_ID = '$_GET[cc]'");
							if(mysqli_affected_rows($cnx) == 1)
							{
								echo "<a class='cc-btn cc-btn-unfav' href='php/favunfav.php?cc=$_GET[cc]'>Unfav</a>";
							}
							else
							{
								echo "<a class='cc-btn cc-btn-fav' href='php/favunfav.php?cc=$_GET[cc]'>Fav</a>";
							}
						}

					 ?>


					<a href=""></a></div>
			</div>

			<p><?php echo $cc_data['CONTENT'] ?></p>

			<div>
				<div>
					<span><?php echo $cc_data['CC_DATE'] ?></span>
				</div>
				<div>
					<!-- <span>X VECES FAVEADO</span> -->
				</div>
			</div>
		</div>
	</div>
</div>

<?php } ?>
