<?php
	date_default_timezone_set('America/Argentina/Buenos_aires');
	ini_set('display_errors', 1);
	ini_set('html_errors', true);
	ini_set('xdebug.trace_format', 2);

	$s = isset($_GET['s']) ? $_GET['s']:'home';
?>