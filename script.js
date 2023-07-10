//Primer Punto Calculadora
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operación inválida";
    }

    document.getElementById('resultadoOperacion').value = resultado;
});


//Segundo Punto Edad

function mostrarResultado(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    var edad = parseInt(document.getElementById('edad').value);
    
    if (edad < 18) {
        alert("No es mayor de edad");
    } else {
        alert("Es mayor de edad");
    }
    
    window.location.href = window.location.href; // Redirige a la página actual
    
    return false; // Evita que el formulario se envíe
}



//Tercer punto Solicitar nombre ...

function validarFormulario() {
    var nombre = document.forms[0].nombre.value;
    var apellido = document.forms[0].apellido.value;
    var cedula = document.forms[0].cedula.value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || cedula.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }
  
    // Puedes agregar más validaciones según tus requisitos
  
    return true;
  }
  


  //Cuarto Punto Fecha de nacimiento


  document.getElementById('formularioEdad').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var fechaActual = new Date().toISOString().slice(0, 10);
    var edad = calcularEdad(fechaNacimiento, fechaActual);
  
    mostrarResultado(edad);
  });
  
  function calcularEdad(fechaNacimiento, fechaActual) {
    var nacimiento = new Date(fechaNacimiento);
    var actual = new Date(fechaActual);
    var edad = actual.getFullYear() - nacimiento.getFullYear();
    var meses = actual.getMonth() - nacimiento.getMonth();
    var dias = actual.getDate() - nacimiento.getDate();
  
    if (meses < 0 || (meses === 0 && dias < 0)) {
        edad--;
    }
  
    return edad;
  }
  
  function mostrarResultado(edad) {
    var estado = (edad < 18) ? "No es mayor de edad" : "Es mayor de edad";
    var resultado = "Su edad es " + edad + " años. Por tanto, " + estado;
  
    alert(resultado);
  }
  
  
  //quinto, sexto y septimo punto

  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var documentNumber = document.getElementById("document").value;

    // Envía los datos al servidor usando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Muestra el mensaje de registro exitoso
            document.getElementById("message").textContent = "Registro exitoso";

            // Limpia los campos del formulario
            document.getElementById("name").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("document").value = "";

            // Actualiza la tabla de registros
            displayRecords();
        }
    };
    xhr.send("name=" + name + "&lastname=" + lastname + "&document=" + documentNumber);
});

function displayRecords() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_records.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var records = JSON.parse(xhr.responseText);
            var tableContainer = document.getElementById("tableContainer");
            tableContainer.innerHTML = "";

            if (records.length > 0) {
                var table = document.createElement("table");
                var thead = document.createElement("thead");
                var tbody = document.createElement("tbody");

                var headerRow = document.createElement("tr");
                var nameHeader = document.createElement("th");
                nameHeader.textContent = "Nombre";
                var lastnameHeader = document.createElement("th");
                lastnameHeader.textContent = "Apellido";
                var documentHeader = document.createElement("th");
                documentHeader.textContent = "No de Documento";

                headerRow.appendChild(nameHeader);
                headerRow.appendChild(lastnameHeader);
                headerRow.appendChild(documentHeader);
                thead.appendChild(headerRow);

                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    var row = document.createElement("tr");
                    var nameCell = document.createElement("td");
                    nameCell.textContent = record.name;
                    var lastnameCell = document.createElement("td");
                    lastnameCell.textContent = record.lastname;
                    var documentCell = document.createElement("td");
                    documentCell.textContent = record.document;

                    row.appendChild(nameCell);
                    row.appendChild(lastnameCell);
                    row.appendChild(documentCell);
                    tbody.appendChild(row);
                }

                table.appendChild(thead);
                table.appendChild(tbody);
                tableContainer.appendChild(table);
            }
        }
    };
    xhr.send();
}

// Muestra los registros cuando se carga la página
displayRecords();






function mostrarRegistros() {
    var registrosContainer = document.getElementById("registrosContainer");
    registrosContainer.innerHTML = "";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var registros = JSON.parse(this.responseText);
            if (registros.length > 0) {
                var html = "<form>";
                registros.forEach(function(registro) {
                    html += '<input type="text" value="' + registro.Nombre + '">';
                    html += '<input type="text" value="' + registro.Apellido + '">';
                    html += '<input type="text" value="' + registro.Cedula + '">';
                    html += '<br><br>';
                });
                html += "</form>";
                registrosContainer.innerHTML = html;
            } else {
                registrosContainer.innerHTML = "No hay registros en la base de datos.";
            }
        }
    };
    xhttp.open("GET", "mi_register.php", true);
    xhttp.send();
}

  
  