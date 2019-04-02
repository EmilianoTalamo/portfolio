<section id="galeria">
	<h2>Los instrumentos</h2>
	<div>
		<div>
			<ul>
				<?php
					foreach($instrumentos as $i => $j)
					{
						echo "<li>";
						echo "<a href='index.php?s=galeria&cat=$i'";
						if(isset($_GET['cat']))
							if($i == $_GET['cat'])
								echo " class='currentgallery'";
						echo ">";
						echo $i;
						echo "</a>";
						echo "</li>";
					}
				?>
			</ul>
		</div>
		<div id="galeria-container">
			<?php
			$validcat = false;
			$validindex = false;
			if(isset($_GET['cat']))
			{
				foreach($instrumentos as $i => $j)
				{
					if($_GET['cat'] == $i)
					{
						$validcat = true;				
					}
				}
				if($validcat)
				{
					if(isset($_GET['i']))
					{
						foreach($instrumentos[$_GET['cat']] as $index => $j)
						{
							if($_GET['i'] == $index)
							{
								$validindex = true;
							}
						}
						if($validindex)
						{
							Desplegar_Info($_GET['cat'], $_GET['i']);
						}
						else
						{
							Desplegar_Galeria($_GET['cat']);
						}
					}
					else
					{
						Desplegar_Galeria($_GET['cat']);
					}
				}
				else
				{
					echo "<p class='nocat'>Seleccione una categoría.</p>";
				}
			}
			else
			{
				echo "<p class='nocat'>Seleccione una categoría.</p>";
			}
			?>
		</div>
	</div>
</section>