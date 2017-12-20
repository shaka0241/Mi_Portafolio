<?php
include("configuracion.php");
$conexion= new mysqli($server,$user,$password,$db);

if(mysqli_connect_errno()){
    echo "No conectado", mysqli_connect_error();
    exit();
}else{
    echo "<strong>Conectado a la base de datos</strong>";
}

?>