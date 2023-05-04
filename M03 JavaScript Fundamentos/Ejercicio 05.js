/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   var entero = num;
   if (entero > 0 ) {
      return "Es positivo";
   } else if (entero < 0) {
      return "Es negativo";
   }{
      return false;
   }
}
esPositivo (0);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   var excla = str + '!';
   return excla;
}
agregarSimboloExclamacion('diego');

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   var combinar = nombre + ' ' + apellido;
   return combinar;
}
combinarNombres('Diego','Denegri');

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   var saludo = 'Hola ' + nombre + '!';
   return saludo;
}
obtenerSaludo('Diego');


function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var areaRec = alto * ancho;
   return areaRec;
}
obtenerAreaRectangulo( 50, 70);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var perim = lado+lado+lado+lado;
   return perim;
}
retornarPerimetro(14);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   var triangulo = (base * altura) / 2 ;
   return triangulo;
}
areaDelTriangulo(4,4);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   var conver = euro * 1.20;
   return conver;
}
deEuroAdolar (5);


function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:

   

   if (letra === 'a') 
   {
      return "Es vocal";
   } else if (letra === 'e') 
   {
      return "Es vocal";

   }else if (letra === 'i') 
   {
      return "Es vocal";
   } else if (letra === 'o')
   {
      return "Es vocal";
   } else if (letra === 'u')
   {
      return "Es vocal";
   } else {
      return "Dato incorrecto";
   }
}
esVocal('as');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
