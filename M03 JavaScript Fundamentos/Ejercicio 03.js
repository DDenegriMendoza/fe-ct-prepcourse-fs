/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      return true;
   }else{
      return false;
   }
}
sonIguales(5,4);


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   
   var longitud1 = str1.length;
   var longitud2 = str2.length;
   if (longitud1 === longitud2) {
      return true;
   } else {
      return false;
   }
}
tienenMismaLongitud ("holass","holaaa");



function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      return true;
      
   } else {
      return false;
   }
   
}
menosQueNoventa (50);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      return true;
   } else {
      return false;
   }
}
mayorQueCincuenta (51);

function esPar(num) {

   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   
   if (num%2==0) {
      return true;
   } else {
      return false;
   }
}
esPar(44);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 == 1) {
      return true;
   } else {
      return false;
   }
}
esImpar(3);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
