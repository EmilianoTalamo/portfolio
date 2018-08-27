<h1>Edición de banner de publicidad</h1>
<?php
	$query = <<<SQL
		SELECT LINK, PIC FROM banner WHERE ID = 1
SQL;
	$banner = mysqli_fetch_assoc(mysqli_query($cnx, $query));
	$source = $banner['PIC'];
?>
<img src="<?php echo "data:image/jpeg;base64, $source" ?>" alt="" id="banner-preview">

<form action="php/update_banner.php" method="post" enctype="multipart/form-data">
	<input type="file" name="banner" id="">
	<textarea name="link" rows="1" cols="80" minlength="7"><?php echo $banner['LINK']; ?></textarea>
	<input type="submit" value="Actualizar banner">
</form>
