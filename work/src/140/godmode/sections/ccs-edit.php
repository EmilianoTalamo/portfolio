<h1>Control de contenidos</h1>

<?php
	$query = <<<SQL
	SELECT
	cientocuarentas.ID as CC_ID, cientocuarentas.FKUSER_ID, cientocuarentas.CONTENT, users.ID, users.HANDLE
FROM
	cientocuarentas, users
WHERE
	cientocuarentas.FKUSER_ID = users.ID
SQL;
	$query = mysqli_query($cnx, $query);
?>

<?php
	if(isset($_GET['edit']))
	{
		$editquery = <<<SQL
		SELECT
		cientocuarentas.ID as CC_ID, cientocuarentas.FKUSER_ID, cientocuarentas.CONTENT,
		users.ID, users.HANDLE
	FROM
		cientocuarentas, users
	WHERE
		cientocuarentas.FKUSER_ID = users.ID AND cientocuarentas.ID = '$_GET[edit]'
SQL;
	$editdata = mysqli_fetch_assoc(mysqli_query($cnx, $editquery));
?>
<form class="" action="php/action_editcc.php" method="post" id="editform">
	<input type="text" readonly name="id" value="ID = <?php echo $editdata['CC_ID'] ?>">
	<input type="text" readonly value="User: @<?php echo $editdata['HANDLE'] ?>">
	<textarea name="newcontent" rows="8" cols="80" id="input_140"><?php echo $editdata['CONTENT'] ?></textarea>
	<span id="charcount">?</span>
	<input type="submit" id="send_140" value="Editar">
	<script src="../js/charcount.js" type="text/javascript">
	</script>
</form>

<?php } ?>

<?php
	if(isset($_GET['delete']))
	{
		$delquery = <<<SQL
		DELETE FROM
			cientocuarentas
		WHERE
			ID='$_GET[delete]' LIMIT 1
SQL;
		mysqli_query($cnx, $delquery);
		header("Location: index.php?page=ccs-edit");
	}
?>
<table id="ccs-edit-table">
	<tr>
		<th>ID</th>
		<th>Usuario</th>
		<th>Contenido</th>
		<th>Acciones</th>
	</tr>
	<?php
	while(($cc = mysqli_fetch_assoc($query)) != null)
	{
		echo "<tr>";
		echo "<td>"; echo $cc['CC_ID']; echo "</td>";
		echo "<td>"; echo $cc['HANDLE']; echo "</td>";
		echo "<td>"; echo $cc['CONTENT']; echo "</td>";
		echo "<td><a href='index.php?page=ccs-edit&edit=$cc[CC_ID]'>&#9998;</a>";
		echo "<a href='index.php?page=ccs-edit&delete=$cc[CC_ID]'>&times;</a>";
		echo "</td></tr>";
	}
	?>
</table>
