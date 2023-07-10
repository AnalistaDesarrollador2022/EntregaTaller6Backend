<?php
$edad = $_POST['edad'];

if ($edad < 18) {
    echo "<script>alert('No es mayor de edad');</script>";
} else {
    echo "<script>alert('Es mayor de edad');</script>";
}
?>

