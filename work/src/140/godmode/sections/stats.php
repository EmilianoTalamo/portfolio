<h1>Estadísticas</h1>

<?php
	$inactives = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT COUNT(ID) AS INACTIVES FROM users WHERE STATUS = 'INACTIVE'"))['INACTIVES'];
	$actives = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT COUNT(ID) AS ACTIVES FROM users WHERE STATUS = 'ACTIVE' OR STATUS = 'NEW'"))['ACTIVES'];
	$admins = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT COUNT(ID) AS ADMINS FROM users WHERE STATUS = 'ADMIN'"))['ADMINS'];

	$ccchartstats = <<<SQL
	SELECT
		COUNT( ID ) AS USERS_Q,
		DATE_FORMAT( REGISTER_DATE, '%Y-%m' ) AS REGISTER_YM
	FROM
		users
	GROUP BY
		REGISTER_YM
	ORDER BY
		REGISTER_YM ASC
SQL;
	$ccchartquery = mysqli_query($cnx, $ccchartstats);

 ?>

<canvas id="usersChart"></canvas>

<canvas id='ccChart'></canvas>

<script type="text/javascript" src="js/Chart.min.js"></script>
<script type="text/javascript">
 	var ctx = document.getElementById('usersChart').getContext('2d');
	var chart = new Chart(ctx,
	{
		type: 'pie',
		data:
		{
			labels:
	 			["Cuentas activas", "Cuentas deshabilitadas", "Cuentas admin"],
			datasets:
			[{
				label: "Estado de cuentas",
				data: [<?php echo "$actives, $inactives, $admins" ?>],
				backgroundColor: ['#3F51B5','#F44336', '#4CAF50'],
			}]
		},
	});
</script>

<script type="text/javascript">
 	var ctx = document.getElementById('ccChart').getContext('2d');
	var chart = new Chart(ctx,
	{
		type: 'line',
		data:
		{
			labels: [
				<?php
					while(($month = mysqli_fetch_assoc($ccchartquery)) != null)
					{
						echo "'$month[REGISTER_YM]',";
					}
				?>
				],
			xAxisID: "Mes",
			yAxisID : "Usuarios registrados",
			datasets:
			[{
				label: "Registros por mes",
				fill: "false",
				data: [
					<?php
						$ccchartquery = mysqli_query($cnx, $ccchartstats);
						while(($month = mysqli_fetch_assoc($ccchartquery)) != null)
						{
							echo "'$month[USERS_Q]',";
						}
					?>
				],
				borderColor: ['#3F51B5'],
				backgroundColor: ['#3F51B5']
			}]
		},
	});
</script>
