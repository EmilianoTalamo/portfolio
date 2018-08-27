<section id="form">
	<div>
		<div>
			<h2>Comprá los DVDs</h2>
			<p>Completá este formulario para realizar la compra de los DVDs editados de Les Luthiers.</p>
			<p>Todos disponibles con una gran calidad de producción audiovisual y en HD para disfrutar con toda tu familia en la comodidad de tu casa.</p>
		</div>
		<form action="php/sendform.php" method="post">
			<h2>Formulario</h2>
			<?php if(isset($_GET['err'])) if($_GET['err'] == 1) echo "<p class=\"error\">Por favor complete los campos marcados con un asterisco.</p>" ?>
			<div>
					<input type="text" name="nombre" placeholder="Nombre*">
					<input type="text" name="apellido" placeholder="Apellido*">
					<input type="text" name="mail" placeholder="Mail*">
					<input type="text" name="ciudad" placeholder="Ciudad*">
					<input type="text" name="direccion" placeholder="Dirección*">
					<input type="number" name="cp" placeholder="Código postal*">
			</div>
			<div>
				<textarea name="msj" cols="30" rows="6" placeholder="Observaciones de compra"></textarea>
			</div>
			<div>
				<h3>DVDs a comprar</h3>
				<?php
					for($i = 0 ; $i < sizeof($dvds) ; $i++)
					{
						echo "<label for=\"dvd$i\"><input id=\"dvd$i\" type=\"checkbox\" value=\"$dvds[$i]\" name=\"dvdcb[]\">$dvds[$i]</label>";
					}
				?>
			</div>
			<div>
				<input type="submit" value="Comprar">
			</div>
		</form>
	</div>
</section>