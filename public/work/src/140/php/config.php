<?php

define('SQL_SERVER', 'localhost');
define('SQL_USER', 'root');
define('SQL_PASS', '');
define('SQL_DB', 'DW3_TALAMO_EMILIANO');

session_start();
date_default_timezone_set('America/Argentina/Buenos_aires');
ini_set('display_errors', 1);
error_reporting(E_ALL);

$cnx = mysqli_connect(SQL_SERVER, SQL_USER, SQL_PASS, SQL_DB);

@mysqli_set_charset($cnx, 'utf8');
?>
