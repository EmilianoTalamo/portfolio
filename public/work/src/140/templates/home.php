<ul class="timeline-select">
	<?php
	if(isset($_GET['tl']))
	{
		if($_GET['tl'] == 'user')
		{
			$currenttl = 'user';
		}
		else
		{
			$currenttl = 'all';
		}
	}
	else
	{
			$currenttl = 'user';
	}
	?>
	<li><a <?php if($currenttl == 'user') { echo "class='tl-active'"; } ?> href="index.php?tl=user">Tu timeline</a></li>
	<li><a <?php if($currenttl == 'all') { echo "class='tl-active'"; } ?> href="index.php?tl=all">Todos los 140</a></li>
</ul>

<div id="wrapper140">

<form action="php/send_140.php" method="POST" id="form_140">
	<textarea name="cientocuarenta" id="input_140" cols="30" rows="4" placeholder="En qué estás pensando?" required></textarea>
	<div>
		<span id="charcount">140</span>
		<button type="submit" value="Enviar" id="send_140" disabled>Enviar</button>
	</div>
	<script src="js/charcount.js"></script>
</form>
<?php
	include("php/fetch_140.php");
?>
</div>
