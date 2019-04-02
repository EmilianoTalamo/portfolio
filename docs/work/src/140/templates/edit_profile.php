<?php
	$query = <<<SQL
	SELECT
		NAME, BIO, STATUS
	FROM
		users
	WHERE
		ID = $_SESSION[ID]
SQL;

	$profile_to_edit = mysqli_fetch_assoc(mysqli_query($cnx, $query));
?>
<div id="modalbg">
	<div id="modal">
		<div id="modal-title">
			<a href="index.php?profile=<?php echo $_SESSION['ID'] ?>">&times;</a>
		</div>

		<form action="./php/update_profile.php" id="profile_edit" method="POST" enctype="multipart/form-data">
			<div>
				<label for="edit_avatar">
					<div>
						<span>&#9998;</span>
						<img src="./res/profile_pics/<?php echo $_SESSION['ID']?>.jpg" alt="Avatar">
					</div>
				</label>
			</div>
				<input type="file" name="new_avatar" id="edit_avatar" accept=".jpg, .jpeg">
			<div>
				<span>Nombre</span>
				<input type="text" name="name" id="" maxlength="20" value="<?php echo $profile_to_edit['NAME']; ?>">
				<span>Bio</span>
				<textarea name="bio" id="" cols="30" rows="5" maxlength="160"><?php echo $profile_to_edit['BIO'];?></textarea>
				<input type="submit" value="Realizar cambios">
				<p><?php if(isset($_SESSION['profile_update_error'])){ echo $_SESSION['profile_update_error']; } ?></p>
			</div>
		</form>




	</div>
</div>
