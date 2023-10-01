function contarParesEImpares() {
  var numero = parseInt(prompt("Ingresa un número:"));
  var pares = 0;
  var impares = 0;
  if (!isNaN(numero) && numero > 0) {
    for (var i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }
    console.log("Cantidad de números pares: " + pares);
    console.log("Cantidad de números impares: " + impares);
  } else {
    console.log("Por favor, ingresa un número válido mayor que 0.");
  }
}


function calcularFactorial() {
  var numero = parseInt(prompt("Ingresa un número:"));
  if (!isNaN(numero) && numero >= 0) {
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
      factorial *= i;
    }
    console.log("El factorial de " + numero + " es: " + factorial);
  } else {
    console.log("Por favor, ingresa un número válido (mayor o igual a 0).");
  }
}


function validarContraseña() {
  var contraseñaIngresada = prompt("Ingresa tu contraseña:");
  var contraseñaEsperada = "secreto123";
  if (contraseñaIngresada === contraseñaEsperada) {
    console.log("Acceso concedido. Bienvenido.");
  } else {
    console.log("Acceso denegado. La contraseña es incorrecta.");
  }
}


function generarTablaDeMultiplicar() {
  var numero = parseInt(prompt("Ingresa un número para generar la tabla de multiplicar:"));
  if (!isNaN(numero)) {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  } else {
    console.log("Por favor, ingresa un número válido.");
  }
}


function adivinarNumero() {
  var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  var intentos = 0;
  var numeroUsuario;

  while (true) {
    numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;
    if (!isNaN(numeroUsuario)) {
      if (numeroUsuario < numeroAleatorio) {
        console.log("Demasiado bajo. Intenta de nuevo.");
      } else if (numeroUsuario > numeroAleatorio) {
        console.log("Demasiado alto. Intenta de nuevo.");
      } else {
        console.log("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
        break;
      }
    } else {
      console.log("Por favor, ingresa un número válido.");
    }
  }
}


function sumaPrimerosNPrimos(N) {
  var suma = 0;
  var numero = 2; 
  var encontrados = 0;
  while (encontrados < N) {
    if (esPrimo(numero)) {
      suma += numero;
      encontrados++;
    }
    numero++;
  }

  return suma;
}


function sumaPrimerosNPrimos(N) {
  var suma = 0;
  var numero = 2;
  var encontrados = 0;

  while (encontrados < N) {
    if (esPrimo(numero)) {
      suma += numero;
      encontrados++;
    }
    numero++;
  }

  return suma;
}
var N = parseInt(prompt("Ingresa un valor para N:"));

if (!isNaN(N) && N > 0) {
  console.log("La suma de los primeros " + N + " números primos es: " + resultado);
} else {
  console.log("Por favor, ingresa un valor válido para N (mayor que 0).");
}


function generarSecuenciaFibonacci(termino) {
  var secuencia = [];
  
  if (termino >= 1) {
    secuencia.push(0);
  }
  if (termino >= 2) {
    secuencia.push(1);
  }
  
  for (var i = 2; i < termino; i++) {
    var siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguienteNumero);
  }
  
  return secuencia;
}
var terminoUsuario = parseInt(prompt("Ingresa el término hasta el cual deseas generar la secuencia de Fibonacci:"));

if (!isNaN(terminoUsuario) && terminoUsuario >= 1) {
  console.log("Secuencia de Fibonacci hasta el término " + terminoUsuario + ": " + secuenciaFibonacci.join(", "));
} else {
  console.log("Por favor, ingresa un término válido (mayor o igual a 1).");
}


function convertirTemperatura() {
  var direccion = prompt("Elige la dirección de la conversión:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius");
  if (direccion === "1") {
    var celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      console.log(celsius + " grados Celsius son equivalentes a " + fahrenheit + " grados Fahrenheit.");
    } else {
      console.log("Por favor, ingresa una temperatura válida en grados Celsius.");
    }
  } else if (direccion === "2") {
    var fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
    if (!isNaN(fahrenheit)) {
      var celsius = (fahrenheit - 32) * 5/9;
      console.log(fahrenheit + " grados Fahrenheit son equivalentes a " + celsius + " grados Celsius.");
    } else {
      console.log("Por favor, ingresa una temperatura válida en grados Fahrenheit.");
    }
  } else {
    console.log("Por favor, elige una opción válida (1 o 2) para la dirección de la conversión.");
  }
}


function Potenciacion(){
  let numeroUno = Number(prompt('Ingrese el numero a potenciar uno'))
  let numeroDos = Number(prompt('Ingrese el numero a potenciar dos'))
  let contador = 0;
console.log ('numero de ejecuciones: ' + contador)
  console.log(Math.pow(numeroUno,numeroDos))
}


function jugarPiedraPapelTijeras() {
  var opcionesValidas = ["piedra", "papel", "tijeras"];
  var opcionComputadora = opcionesValidas[Math.floor(Math.random() * 3)];
  var opcionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();
  if (!opcionesValidas.includes(opcionUsuario)) {
    console.log("Opción no válida. Por favor, elige piedra, papel o tijeras.");
    return;
  }
  if (opcionUsuario === opcionComputadora) {
    console.log("Empate. Ambos eligieron " + opcionUsuario + ".");
  } else if (
    (opcionUsuario === "piedra" && opcionComputadora === "tijeras") ||
    (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
    (opcionUsuario === "tijeras" && opcionComputadora === "papel")
  ) {
    console.log("¡Ganaste! Tú elegiste " + opcionUsuario + " y la computadora eligió " + opcionComputadora + ".");
  } else {
    console.log("La computadora ganó. Tú elegiste " + opcionUsuario + " y la computadora eligió " + opcionComputadora + ".");
  }
}


let repetir =true 
let opcion;
while (repetir) {
    opcion = Number(prompt('Seleccione: \n1- Contar Pares e Impares \n2- Calcular Factorial \n3- Validar Contraseña \n4- Generar Tabla Multiplicar \n5- Adivinar Numero \n6- Suma de Primos \n7- Generar Secuencia Fibonacci \n8- Convertir Temperatura \n9- Potenciacion \n10- Jugar Piedra Papel Tijerass \n11 Salir' ))
    
    switch (opcion){
        case 1:
         contarParesEImpares()
         break;
        case 2:
         calcularFactorial()
         break;
        case 3:
         validarContraseña()
         break;
        case 4:
         generarTablaDeMultiplicar()
         break;
        case 5:
         adivinarNumero()
         break;
        case 6:
         sumaPrimerosNPrimos()
         break;
        case 7:
         generarSecuenciaFibonacci()
         break;
        case 8:
         convertirTemperatura()
         break;  
        case 9:
         Potenciacion()
         break;
        case 10:
         jugarPiedraPapelTijeras()
         break;
        case 11:
         repetir = false
         break
        
    }
    
}