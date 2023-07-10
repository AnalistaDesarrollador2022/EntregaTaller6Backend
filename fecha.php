<!DOCTYPE html>
<html>
<head>
    <title>Resultado de Edad</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Resultado de Edad</h1>
        <?php
        if (isset($_GET['fechaNacimiento'])) {
            $fechaNacimiento = $_GET['fechaNacimiento'];
            $fechaActual = date("Y-m-d");
            $edad = calcularEdad($fechaNacimiento, $fechaActual);
            $estado = ($edad < 18) ? "No es mayor de edad" : "Es mayor de edad";

            echo "<p>Su edad es $edad años.</p>";
            echo "<p>Por tanto, $estado.</p>";
        }

        function calcularEdad($fechaNacimiento, $fechaActual) {
            $nacimiento = new DateTime($fechaNacimiento);
            $actual = new DateTime($fechaActual);
            $diferencia = $nacimiento->diff($actual);

            return $diferencia->y;
        }
        ?>
    </div>
</body>
</html>