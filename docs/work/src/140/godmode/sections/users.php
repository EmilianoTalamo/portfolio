<h1>Vista de usuarios</h1>

<?php
	$query = mysqli_query($cnx, "SELECT ID, HANDLE, NAME, MAIL, STATUS FROM users");
?>

<table id="users-table">
	<tr>
		<th>ID</th>
		<th>Handle</th>
		<th>Nombre</th>
		<th>E-Mail</th>
		<th>Status</th>
	</tr>
	<?php
		while(($user = mysqli_fetch_assoc($query)) != null)
		{
			echo "<tr>";
			echo "<td>$user[ID]</td>";
			echo "<td>@$user[HANDLE]</td>";
			echo "<td>$user[NAME]</td>";
			echo "<td>$user[MAIL]</td>";
			echo "<td>$user[STATUS]</td>";
			echo "</tr>";
		}
	?>
</table>
