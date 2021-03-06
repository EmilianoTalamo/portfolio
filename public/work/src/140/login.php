<?php
	require('php/config.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="WEB DESCRIPTION">
	<meta name="keywords" content="140,social network">
	<meta name="author" content="Emiliano Tálamo">
	<meta name="theme-color" content="#ffffff">
	<title>140 | Login</title>
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" href="css/login.css">
	<script src="js/validate-login.js" defer></script>
</head>
<body id="login">
<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 1176 792" enable-background="new 0 0 1176 792" xml:space="preserve">
<g id="Layer_4">
<g opacity="0.5">
 <path d="M375.6,725.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
	 C398,776.4,375.6,754,375.6,725.9z"/>
 <path d="M553.1,725.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
	 C575.5,776.4,553.1,754,553.1,725.9z"/>
 <path d="M730.6,725.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
	 C753,776.4,730.6,754,730.6,725.9z"/>
 <rect x="266" y="445" width="529.3" height="64.3"/>
 <rect x="262.5" y="371" width="432.5" height="22"/>
 <path d="M216.8,587.7c-12.6,0-22.8-10.2-22.8-22.8V172.7l-58.3,34c-3.5,2-7.4,3.1-11.5,3.1c-8.2,0-15.8-4.4-19.8-11.6l-26.4-46.7
	 c-6.1-10.8-2.4-24.6,8.3-30.9L204,51.7c3.5-2,7.5-3.1,11.5-3.1H280c12.6,0,22.8,10.2,22.8,22.8v493.5c0,12.6-10.2,22.8-22.8,22.8
	 H216.8z"/>
 <path d="M280,65.9c3,0,5.4,2.4,5.4,5.4v493.5c0,3-2.4,5.4-5.4,5.4h-63.2c-3,0-5.4-2.4-5.4-5.4V144.3h-3l-81.4,47.5
	 c-0.9,0.5-1.8,0.7-2.7,0.7c-1.9,0-3.7-1-4.7-2.8L93,143c-1.5-2.6-0.6-5.9,2-7.4l117.7-68.9c0.8-0.5,1.8-0.7,2.8-0.7H280 M280,31.3
	 h-64.5c-7.1,0-14.1,1.9-20.3,5.5L77.5,105.7c-9.1,5.4-15.7,13.9-18.5,24.2c-2.8,10.2-1.4,21,3.8,30.2l26.4,46.7
	 c7.1,12.6,20.5,20.4,34.9,20.4c7.1,0,14.1-1.9,20.2-5.5l32.3-18.8v362c0,22.1,18,40.1,40.1,40.1H280c22.1,0,40.1-18,40.1-40.1
	 V71.4C320.1,49.3,302.1,31.3,280,31.3L280,31.3z"/>
 <path d="M570.7,587.7c-9.6,0-17.3-7.8-17.3-17.3v-78.7H341.9c-9.6,0-17.3-7.8-17.3-17.3v-51.5c0-3.2,0.9-6.3,2.5-9L545.4,56.9
	 c3.1-5.2,8.8-8.3,14.8-8.3h81.3c9.6,0,17.3,7.8,17.3,17.3v322.8h53.6c9.6,0,17.3,7.8,17.3,17.3v68.2c0,9.6-7.8,17.3-17.3,17.3
	 h-53.6v78.7c0,9.6-7.8,17.3-17.3,17.3H570.7z M553.4,388.7V233.5l-92.1,155.3H553.4z"/>
 <path d="M641.4,65.9v340.1h70.9v68.2h-70.9v96.1h-70.7v-96.1H341.9v-51.5L560.1,65.9H641.4 M430.8,406.1h139.9V163.5l-10.5,24.3
	 c-0.1,0.2-0.2,0.4-0.3,0.6L430.8,406.1 M641.4,31.3h-81.3c-12.1,0-23.3,6.3-29.6,16.6L312.4,404.7c-3.3,5.4-5.1,11.7-5.1,18.1
	 v51.5c0,19.1,15.5,34.7,34.7,34.7h194.1v61.4c0,19.1,15.5,34.7,34.7,34.7h70.7c19.1,0,34.7-15.5,34.7-34.7V509h36.3
	 c19.1,0,34.7-15.5,34.7-34.7v-68.2c0-19.1-15.5-34.7-34.7-34.7h-36.3V65.9C676.1,46.8,660.6,31.3,641.4,31.3L641.4,31.3z
		M491.7,371.4l44.3-74.7v74.7H491.7L491.7,371.4z"/>
 <path d="M932.5,594.6c-56.3,0-103.9-21.3-137.5-61.5c-17.2-20.6-30.5-46-39.4-75.5c-9.1-30.1-13.8-64.6-13.8-102.5v-81.3
	 c0-37.1,4.6-70.8,13.8-100c8.9-28.6,22.2-53.2,39.5-73.2c33.3-38.5,80.6-58.9,136.7-58.9c56.1,0,103.3,20.4,136.4,58.9
	 c35.1,40.8,52.8,99,52.8,173.2v81.3c0,37.9-4.5,72.4-13.5,102.4c-8.8,29.4-21.8,54.8-38.7,75.5
	 C1035.7,573.3,988.5,594.6,932.5,594.6z M931.8,144.1c-47.2,0-76.5,45-76.5,117.4v105.7c0,39.8,8.4,72.7,24.2,95.2
	 c13.6,19.4,32,29.6,53.1,29.6c45.7,0,75.3-49,75.3-124.8V261.5c0-38.4-8.1-69.6-23.3-90.3C971.4,153.5,953.1,144.1,931.8,144.1z"
	 />
 <path d="M931.8,59c99.5,0,171.9,69.5,171.9,214.8v81.3c0,148.8-71.7,222.1-171.2,222.1c-100,0-173.4-73.4-173.4-222.1v-81.3
	 C759.1,128.5,832.3,59,931.8,59 M932.5,509.3c52.7,0,92.6-51.2,92.6-142.1V261.5c0-88.7-40.1-134.7-93.3-134.7
	 c-53.2,0-93.8,46.1-93.8,134.7v105.7C837.9,458,879.3,509.3,932.5,509.3 M931.8,24.4c-29.7,0-57.5,5.3-82.4,15.8
	 c-26.1,11-48.8,27.5-67.5,49c-18.8,21.8-33.3,48.5-42.9,79.4c-9.7,30.9-14.6,66.3-14.6,105.2v81.3c0,39.6,4.9,75.8,14.5,107.5
	 c9.6,31.7,24,59.1,42.7,81.5c18.7,22.3,41.4,39.5,67.6,51c25.2,11.1,53.2,16.7,83.2,16.7c29.9,0,57.8-5.6,82.8-16.8
	 c26-11.5,48.5-28.8,66.9-51.2c18.4-22.4,32.5-49.8,42-81.5c9.4-31.6,14.2-67.8,14.2-107.4v-81.3c0-38.8-4.9-74.2-14.4-105.1
	 c-9.6-30.9-23.9-57.6-42.6-79.4c-18.5-21.6-41.2-38.1-67.2-49.1C989.2,29.7,961.5,24.4,931.8,24.4L931.8,24.4z M932.5,474.6
	 c-15.4,0-28.5-7.5-38.9-22.2c-13.6-19.3-21-49.5-21-85.2V261.5c0-43.7,10.9-67.6,20.1-79.9c9.9-13.4,23.1-20.1,39-20.1
	 c16.1,0,28.8,6.6,38.7,20c9.1,12.3,19.9,36.2,19.9,80v105.7c0,35.9-7.3,66.3-20.5,85.5C960,467.2,947.4,474.6,932.5,474.6
	 L932.5,474.6z"/>
</g>
<g>
 <g>
	 <g>
		 <path fill="#D52956" d="M365.6,715.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
			 C388,766.4,365.6,744,365.6,715.9z"/>
		 <path fill="#D52956" d="M543.1,715.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
			 C565.5,766.4,543.1,744,543.1,715.9z"/>
		 <path fill="#D52956" d="M720.6,715.9c0-27.8,22.9-49.5,50-49.5c27.8,0,50.2,22.4,50.2,49.5c0,28.1-22.4,50.5-50.2,50.5
			 C743,766.4,720.6,744,720.6,715.9z"/>
	 </g>
	 <g>
		 <g>
			 <rect x="256" y="435" fill="#D52956" width="529.3" height="64.3"/>
		 </g>
		 <g>
			 <rect x="252.5" y="361" fill="#D52956" width="432.5" height="22"/>
		 </g>
		 <g>
			 <g>
				 <path fill="#FFFFFF" d="M206.8,577.7c-12.6,0-22.8-10.2-22.8-22.8V162.7l-58.3,34c-3.5,2-7.4,3.1-11.5,3.1
					 c-8.2,0-15.8-4.4-19.8-11.6l-26.4-46.7c-6.1-10.8-2.4-24.6,8.3-30.9L194,41.7c3.5-2,7.5-3.1,11.5-3.1H270
					 c12.6,0,22.8,10.2,22.8,22.8v493.5c0,12.6-10.2,22.8-22.8,22.8H206.8z"/>
				 <path fill="#D52956" d="M270,55.9c3,0,5.4,2.4,5.4,5.4v493.5c0,3-2.4,5.4-5.4,5.4h-63.2c-3,0-5.4-2.4-5.4-5.4V134.3h-3
					 l-81.4,47.5c-0.9,0.5-1.8,0.7-2.7,0.7c-1.9,0-3.7-1-4.7-2.8L83,133c-1.5-2.6-0.6-5.9,2-7.4l117.7-68.9
					 c0.8-0.5,1.8-0.7,2.8-0.7H270 M270,21.3h-64.5c-7.1,0-14.1,1.9-20.3,5.5L67.5,95.7c-9.1,5.4-15.7,13.9-18.5,24.2
					 c-2.8,10.2-1.4,21,3.8,30.2l26.4,46.7c7.1,12.6,20.5,20.4,34.9,20.4c7.1,0,14.1-1.9,20.2-5.5l32.3-18.8v362
					 c0,22.1,18,40.1,40.1,40.1H270c22.1,0,40.1-18,40.1-40.1V61.4C310.1,39.3,292.1,21.3,270,21.3L270,21.3z"/>
			 </g>
			 <g>
				 <path fill="#FFFFFF" d="M560.7,577.7c-9.6,0-17.3-7.8-17.3-17.3v-78.7H331.9c-9.6,0-17.3-7.8-17.3-17.3v-51.5
					 c0-3.2,0.9-6.3,2.5-9L535.4,46.9c3.1-5.2,8.8-8.3,14.8-8.3h81.3c9.6,0,17.3,7.8,17.3,17.3v322.8h53.6
					 c9.6,0,17.3,7.8,17.3,17.3v68.2c0,9.6-7.8,17.3-17.3,17.3h-53.6v78.7c0,9.6-7.8,17.3-17.3,17.3H560.7z M543.4,378.7V223.5
					 l-92.1,155.3H543.4z"/>
				 <path fill="#D52956" d="M631.4,55.9v340.1h70.9v68.2h-70.9v96.1h-70.7v-96.1H331.9v-51.5L550.1,55.9H631.4 M420.8,396.1h139.9
					 V153.5l-10.5,24.3c-0.1,0.2-0.2,0.4-0.3,0.6L420.8,396.1 M631.4,21.3h-81.3c-12.1,0-23.3,6.3-29.6,16.6L302.4,394.7
					 c-3.3,5.4-5.1,11.7-5.1,18.1v51.5c0,19.1,15.5,34.7,34.7,34.7h194.1v61.4c0,19.1,15.5,34.7,34.7,34.7h70.7
					 c19.1,0,34.7-15.5,34.7-34.7V499h36.3c19.1,0,34.7-15.5,34.7-34.7v-68.2c0-19.1-15.5-34.7-34.7-34.7h-36.3V55.9
					 C666.1,36.8,650.6,21.3,631.4,21.3L631.4,21.3z M481.7,361.4l44.3-74.7v74.7H481.7L481.7,361.4z"/>
			 </g>
			 <g>
				 <path fill="#FFFFFF" d="M922.5,584.6c-56.3,0-103.9-21.3-137.5-61.5c-17.2-20.6-30.5-46-39.4-75.5
					 c-9.1-30.1-13.8-64.6-13.8-102.5v-81.3c0-37.1,4.6-70.8,13.8-100c8.9-28.6,22.2-53.2,39.5-73.2
					 c33.3-38.5,80.6-58.9,136.7-58.9c56.1,0,103.3,20.4,136.4,58.9c35.1,40.8,52.8,99,52.8,173.2v81.3c0,37.9-4.5,72.4-13.5,102.4
					 c-8.8,29.4-21.8,54.8-38.7,75.5C1025.7,563.3,978.5,584.6,922.5,584.6z M921.8,134.1c-47.2,0-76.5,45-76.5,117.4v105.7
					 c0,39.8,8.4,72.7,24.2,95.2c13.6,19.4,32,29.6,53.1,29.6c45.7,0,75.3-49,75.3-124.8V251.5c0-38.4-8.1-69.6-23.3-90.3
					 C961.4,143.5,943.1,134.1,921.8,134.1z"/>
				 <path fill="#D52956" d="M921.8,49c99.5,0,171.9,69.5,171.9,214.8v81.3c0,148.8-71.7,222.1-171.2,222.1
					 c-100,0-173.4-73.4-173.4-222.1v-81.3C749.1,118.5,822.3,49,921.8,49 M922.5,499.3c52.7,0,92.6-51.2,92.6-142.1V251.5
					 c0-88.7-40.1-134.7-93.3-134.7c-53.2,0-93.8,46.1-93.8,134.7v105.7C827.9,448,869.3,499.3,922.5,499.3 M921.8,14.4
					 c-29.7,0-57.5,5.3-82.4,15.8c-26.1,11-48.8,27.5-67.5,49c-18.8,21.8-33.3,48.5-42.9,79.4c-9.7,30.9-14.6,66.3-14.6,105.2v81.3
					 c0,39.6,4.9,75.8,14.5,107.5c9.6,31.7,24,59.1,42.7,81.5c18.7,22.3,41.4,39.5,67.6,51c25.2,11.1,53.2,16.7,83.2,16.7
					 c29.9,0,57.8-5.6,82.8-16.8c26-11.5,48.5-28.8,66.9-51.2c18.4-22.4,32.5-49.8,42-81.5c9.4-31.6,14.2-67.8,14.2-107.4v-81.3
					 c0-38.8-4.9-74.2-14.4-105.1c-9.6-30.9-23.9-57.6-42.6-79.4c-18.5-21.6-41.2-38.1-67.2-49.1C979.2,19.7,951.5,14.4,921.8,14.4
					 L921.8,14.4z M922.5,464.6c-15.4,0-28.5-7.5-38.9-22.2c-13.6-19.3-21-49.5-21-85.2V251.5c0-43.7,10.9-67.6,20.1-79.9
					 c9.9-13.4,23.1-20.1,39-20.1c16.1,0,28.8,6.6,38.7,20c9.1,12.3,19.9,36.2,19.9,80v105.7c0,35.9-7.3,66.3-20.5,85.5
					 C950,457.2,937.4,464.6,922.5,464.6L922.5,464.6z"/>
			 </g>
		 </g>
	 </g>
 </g>
</g>
</g>
</svg>
	<form action="php/action_login.php" method="POST">
		<input type="radio" name="action" value="ingresar" id="ingresar" checked>
		<label for="ingresar">Ingresar</label>

		<input type="radio" name="action" value="registrarse" id="registrarse">
		<label for="registrarse">Registrarse</label>

		<div id="wrapper">
			<div id="arrow"></div>
			<input type="email" placeholder="Email" id="login-mail" name="mail" required autofocus>
			<input type="password" placeholder="Contraseña" id="login-password" name="pass" required>
			<input type="text" placeholder="Nombre de usuario" id="register-user" name="username">
		</div>
		<button type="submit">
			<span>
				Ingresar
				<br>
				Registrarse
			</span>
		</button>
	</form>
	<?php
		if(isset($_SESSION['ERROR']))
		{
			echo "<p class='error'> $_SESSION[ERROR]</p>";
			session_unset();
		}
	?>

</body>
</html>
