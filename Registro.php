<?php 
 $conexion=mysqli_connect('localhost', 'root', '', 'mi_proyecto');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=br, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <style>

body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }   


        
.table {
            width: 80%;
            background-color: #fff;
            border-collapse: collapse;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            margin: 0 auto;

        }

        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>
    <br>
    <div>
    <table >
        <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Cedula</td>
        </tr>
        <?php 
        $sql="SELECT * FROM usuarios";
        $result=mysqli_query($conexion,$sql);
        while($mostrar=mysqli_fetch_array($result)) {
        ?>
        <tr>
            <td><?php echo $mostrar['ID']?></td>
            <td><?php echo $mostrar['Nombre']?></td>
            <td><?php echo $mostrar['Apellido']?></td>
            <td><?php echo $mostrar['Cedula']?></td>
        </tr>
        <?php 
        }
        ?>
    </table></div>
</body>
</html>