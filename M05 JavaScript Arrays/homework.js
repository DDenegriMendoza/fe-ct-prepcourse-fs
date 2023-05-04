/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
devolverPrimerElemento(['hola','como','estas']);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}
devolverUltimoElemento (['hola','como','estas','a','hora','5',true]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray(['hola','como','estas','a','hora']);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map(num =>  num + 1);
   return masUno;
  
}
incrementarPorUno([1,2,3,4,5,6,7,8,9]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray ([1],[5,3]);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
agregarItemAlComienzoDelArray ([5,6,7],[1,2,3,4]);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var sep = palabras.join(' ');
   return sep;
}
dePalabrasAFrase(['Hello','word!']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contiene = array.includes(elemento);
   
   return (contiene);
}
arrayContiene(['1', '2', '3'],['4']);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   var suma = 0;

   for(var i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }
   return suma;
}
agregarNumeros([1,1,1,1,1,1]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   
   for(var i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   }
   var promedio = suma / resultadosTest.length;
   return promedio;
}
promedioResultadosTest([10,15,15]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor = arrayOfNums[0];

   for(var i = 0; i < arrayOfNums.length; i++){
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i];
      }
   }
   return mayor;
}
numeroMasGrande([20,10,105,1,12,21]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) {
      return 0;
   }
   if (arguments.length === 1) {
      return arguments[0];
   }

   var producto = arguments[0];

   for (let i = 1; i < arguments.length; i++) {
      producto = producto * arguments[i];
   }
   return producto;
}
multiplicarArgumentos(2,2,5);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayorA18 = [];
   for (let i = 0; i < array.length; i++) {
     if (array[i] > 18) {
         mayorA18.push(array[i]);
     }
   }
   return mayorA18.length;
}
cuentoElementos([15,13,19,14,20]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 7 || numeroDeDia === 1) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}
diaDeLaSemana(7);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   
   if (num.toString()[0] === '9') {
      return true;
   }
   return false;
}
empiezaConNueve(591);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   for (let i = 1; i < array.length; i++) {
      if (array[0] !== array[i]  ) {
         return false;
      }
   }
   return true;
}
todosIguales([1,1,1]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         meses.push(array[i]);
      }
   }
   if (meses.length === 3) {
      return meses;
   }
   return "No se encontraron los meses pedidos";
}
mesesDelAño(["Noviembre","Abril", "Enero","Julio","Marzo"]);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla6 = [];
   for (let i = 0; i <= 10; i++) {
      tabla6.push(i*6);
   }
   return tabla6;
}
tablaDelSeis();


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayorA100 =[];
   for (let i = 0; i < array.length; i++) {
      if (array[i]>100 && array[i]<=200 ) {
         mayorA100.push(array[i]);
      }      
   }
   return mayorA100;
}
mayorACien([1,2,3,100,150,120,200,201]);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var mas2 = [];
   //var num2 = num;
   for (var i = 0; i < 10; i++) {
      num = num + 2;  
      if (num === i) {       
         break;        
      } else {
         mas2.push(num);
      }
   }
   if (i < 10) {
       return "Se interrumpió la ejecución";     
   }else{
      return mas2; 
   }
}
breakStatement(50);


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var por2 = [];
   for (var i = 0; i < 10; i++) {
      
      if (i === 5) {
          continue;
      }else{
         num = num + 2;
         por2.push(num);
      }
   }
   return por2;
}
continueStatement(50);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
