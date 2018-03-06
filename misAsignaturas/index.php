<?php
include("conexion/conexionbd.php");
if(!empty($_POST)){
    $codigo = mysqli_real_scape_string($conexion, $_POST['cod']);
    $asignatura = mysqli_real_scape_string($conexion, $_POST['nom']);
    $nota = mysqli_real_scape_string($conexion, $_POST['nota']);
    $vermaterias ="SELECT idasignaturas, codigoasignaturas,nombreasignatura,nota from asignaturas WHERE codigoasignaturas ='$codigo'OR nombreasignatura='$asignatura'";

        $existemateria = $conexion->query($vermaterias);
        $filas = $existemateria->num_rows;
        if($filas>0){
            echo " <script>
            alert('La asginatura ya existe');
            window.location='index.php';
            </script>"
        } else{
            $sqlmateria="INSERT INTO asignaturas(codigoasignaturas,nombreasignatura,nota)VALUES('$codigo','$asignatura','$nota')";

            $resultadomateria=$conexion-query($sqlmateria);
            if($resultadomateria>0){
                echo "<script>
            alert('Registro exitoso');
            window.location='index.php';
            </script>"
            }else{
                echo "<script> alert('Error al registrar');
            window.location='index.php';
            </script>"
            }
        }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Asignaturas</title>
</head>
<body>

<h3 aling="center">Registro de Asignaturas</h3>

    <form action="<?php $_SERVER['PHP_SELF']?>" method="POST">

    Codigo: <input type="text" name="cod" placeholder="CD101" required>
    Asignatura<input type="text" name="nom" placeholder="Programacion" required>
    Nota: <input type="number" name="nota" placeholder="99">
    <input type="submit" name="guardar" value="Guardar">
    
    </form>

        <hr>

    <h4>****Mis Asignaturas***</h4>

        <table border="1">
        
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Asignatura</th>
                    <th>Nota</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>

                <tbody>
                    <tr>
                        <td>CO100</td>
                        <td>Programacion</td>
                        <td>100</td>
                    </tr>
                </tbody>

        </table>
    
</body>
</html>