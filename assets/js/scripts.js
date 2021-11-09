var notaMinima  = 1; var notaMaxima = 7; var notaMinimaAprobacion = 4;

function obtenerNotaParaAprobar(nota1, nota2, nombreRamo) {
  var resultadoPorCantidad = notaMinimaAprobacion * 3; // 3 = notas totales
  var notaRequerida = resultadoPorCantidad - (nota1 + nota2);
  if (notaRequerida < notaMinima) {
    return 'La nota requerida para tu aprobación es ' + notaMinima;
  } else if (notaRequerida > 7) {
    return 'No tienes salvación, si existiera la escala necesitarias una nota ' + notaRequerida + ' para aprobar';
  } else {
    return  `Para aprobar el ramo ${nombreRamo} con nota 4, necesitas un ${notaRequerida} en la nota 3`
  }
}

function notaValida (mensaje) {
  var valida =  true;
  var nota;
  while(valida) {
    nota = prompt (mensaje); // Muestra mensaje pasado por parametro
    if (isNaN(nota) === false && nota >=1 && nota <= 7) { // Valida que no sea NaN (letras o caracteres) y que la nota sea de 1 a 7
      valida = false; // Si es una nota valida termina el ciclo
    }
  }
  return Number(nota); // Convierte a numbero y lo devuelve
}

var PRUEBA = 123;


var nombre = prompt ("Ingrese Nombre");
var apellido = prompt ("Ingrese Apellido");

var carrera = prompt ("ingrese Carrera");

var ramo1 = prompt ("Ingrese Ramo 1")
var nota1ramo1 = notaValida("Ingrese Nota 1 \nRamo: " + ramo1)
var nota2ramo1 = notaValida("Ingrese Nota 2 \nRamo: " + ramo1)
var nota3ramo1 = notaValida("Ingrese Nota 3 \nRamo: " + ramo1)

var ramo2 = prompt ("Ingrese Ramo 2")
var nota1ramo2 = notaValida("Ingrese Nota 1 \nRamo: " + ramo2)
var nota2ramo2 = notaValida("Ingrese Nota 2 \nRamo: " + ramo2)
var nota3ramo2 = notaValida("Ingrese Nota 3 \nRamo: " + ramo2)

var ramo3 = prompt ("Ingrese Ramo 3")
var nota1ramo3 = notaValida("Ingrese Nota 1 \nRamo: " + ramo3)
var nota2ramo3 = notaValida("Ingrese Nota 2 \nRamo: " + ramo3)


var promedio1 = (nota1ramo1+nota2ramo1+nota3ramo1)/3
var promedio2 = (nota1ramo2+nota2ramo2+nota3ramo2)/3





document.write(
`
<div class="container">
  <h1>Notas Finales</h1>

  <div class="row my-3">
    <div class="col-4 col-sm-3 "> 
      <strong>Nombre:</strong>
    </div>
    <div class="col-8 col-sm-3">${nombre +" " +apellido}</div>
  
    <div class="w-100"></div>
  
    <div class="col-6 col-sm-3">
      <strong>Carrera:</strong>
    </div>
    <div class="col-6 col-sm-3">${carrera}</div>
  </div>

  <table class="table">
    <thead class="table-dark">
      <tr>
        <th scope="col">Ramo</th>
        <th scope="col">Nota 1</th>
        <th scope="col">Nota 2</th>
        <th scope="col">Nota 3</th>
        <th scope="col">Promedio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${ramo1}</th>
        <td>${nota1ramo1}</td>
        <td>${nota2ramo1}</td>
        <td>${nota3ramo1}</td>
        <td>${promedio1}</td>
      </tr>
      <tr>
        <th scope="row">${ramo2}</th>
        <td>${nota1ramo2}</td>
        <td>${nota2ramo2}</td>
        <td>${nota3ramo2}</td>
        <td>${promedio1}</td>
      </tr>
      <tr>
        <th scope="row">${ramo3}</th>
        <td>${nota1ramo3}</td>
        <td>${nota2ramo3}</td>
        <td> - </td>
        <td> - </td>
      </tr>
    </tbody>
  </table>
  <footer>
    <p>${obtenerNotaParaAprobar(nota1ramo3, nota2ramo3, ramo3)}</p>
  </footer>
</div>
`
)