<?php
$serverName = 'localhost';
$connectionInfo = array("database"=>"prueba", "UID"=>"prueba", "PWD"=>"123", "CharacterSet"=>"UTF-8");
$conn_sis = sqlsrv_connect($serverName, $connectionInfo);

if($conn_sis){
	echo "conexion exitosa";
}else {
	echo "Fallo en la conexion";
	die(print_r(sqlsrv_errors(), true));
}

