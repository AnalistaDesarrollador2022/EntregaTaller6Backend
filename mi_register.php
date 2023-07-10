<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

$servername = "localhost";
$database = "mi_proyecto";
$username = "root";
$password = "";


$Nombre = $_POST['Nombre'];
$Apellido= $_POST['Apellido'];
$Cedula = $_POST['Cedula'];


$conexion = mysqli_connect($servername, $username, $password, $database);
$sql = "INSERT INTO usuarios (Nombre, Apellido, Cedula) values ('$Nombre', '$Apellido', '$Cedula')";

if(mysqli_query($conexion, $sql)) {
    echo "Registro Exitoso";
}

?><br>
<button><a href="/mi_proyecto.html">Regresar al inicio</a></button>

</body>
</html>

