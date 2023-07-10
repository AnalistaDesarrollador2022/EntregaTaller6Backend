<!DOCTYPE html>
<html>
<head>
  <title>Resultado</title>
</head>
<body>
  <h1>Datos recibidos:</h1>
  <?php
  $nombre = $_GET['nombre'];
  $apellido = $_GET['apellido'];
  $cedula = $_GET['cedula'];

  echo "<p>Nombre: $nombre</p>";
  echo "<p>Apellido: $apellido</p>";
  echo "<p>Número de cédula: $cedula</p>";
  ?>
</body>
</html>
