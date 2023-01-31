

/* 1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor
de los dos. Si son iguales indicarlo también. Ves cambiando los valores para
comprobar que funciona. */

let variable1 = 3;
let variable2 = 3;

if (variable1 > variable2) {
    console.log("variable1 es mayor que variable2");
} else if (variable1 < variable2) {
    console.log("variable2 es mayor que variable1");
} else {
    console.log("variable1 y variable2 son iguales.")
}

/* 2. Declara un String que contenga tu nombre, después muestra un mensaje de
bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
“Bienvenido Fernando”. */

let miNombre = "Ramón"
console.log("Bienvenido",miNombre);

/* 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt). */

// let nombre = prompt("Introduce tu nombre aquí:")
// console.log("Bienvenido", nombre);

/* 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI. */

// let radio = parseInt(prompt("Introduce radio a calcular"));
// let area = 0

// area = Math.PI * (radio**2);
// console.log(area)

/*5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo. */

// let num1 = parseInt(prompt("Introduce número"));

// if (num1%2 == 0) {
//     console.log("Número es divisible entre 2");
// } else {
//     console.log("Número no divisible entre 2");
// }


/* 6. Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21% */

// let num2 = parseFloat(prompt("Introduce precio producto"));
// const IVA = 0.21;
// let precioConDescuento = 0;

// precioConDescuento = num2 - (num2 * IVA);
// console.log(precioConDescuento);

/*7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.*/

// i = 1
// while (i <= 100) {
//     console.log(i);
//     i ++;
// }

/*8. Haz el mismo ejercicio anterior con un bucle for.*/

// for (i = 1; i <=100; i++) {
//     console.log(i);
// }

/*9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
el bucle que desees. */

// let num3 = 0

// for (i=1; i <= 100 ; i++) {
//     if (num3%2 == 0 || num3%3 == 0) {
//         console.log(num3);
//     }
//     num3 ++;
// }

/*JavaScript Vanilla Basics

10. Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no. */

// let numeroDeVentas = parseInt(prompt('Introduce número de ventas'));
// let sumaVentas = 0;
// let ventas = 0
// let i = 1;
// while (i <= numeroDeVentas) {
//     let ventas = parseFloat(prompt('Introduce venta'));
//     sumaVentas += ventas;
//     i ++;
// }

// console.log('La suma de todas las ventas es', sumaVentas);

/* 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
laboral o no. Usa un switch para ello.*/

// let dia = prompt('Introduce día de la semana').toLowerCase();

// switch (dia) {
//     case "lunes":
//     case "martes":
//     case "miércoles":
//     case "jueves":
//     case "viernes":
//         console.log(`${dia} es laboral.`);
//         break;
//     case "sábado":
//     case "domingo":
//         console.log(`${dia} no eses laboral.`);
//         break;
//     default:
//         console.log(`${dia} no es un día.`)
// }

/*12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos). */

// let usuarioPassword = "1234";

// let intentos = 3;

// for (i = 0 ; i < 3 ; i++) {
//     let password = prompt("Introduce tu password.");
//     if (password != usuarioPassword) {
//         intentos --;
//         console.log ("Contraseña incorrecta, número de intentos restantes:", intentos);
        
//     } else {
//         console.log("Enhorabuena");
//         i = 3;
//     }    
// }

/*13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
un signo aritmético (String), según este último se realizará la operación
correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2. */

let operando1 = parseFloat(prompt("Introduce operando 1"));
let operando2 = parseFloat(prompt("Introduce operando 2"));
let signoAritmetico = prompt("Introduce signo aritmético");
let suma = operando1 + operando2;
let resta = operando1 - operando2;
let producto = operando1 * operando2;
let division = operando1 / operando2;
let exponencial = operando1**operando2;
let modulo = operando1%operando2;

switch(signoAritmetico) {
    case '+': 
        alert(suma);
        break;
    case '-':
        alert(resta);
        break;
    case '*':
        alert(producto);
        break
    case '/':
        alert(division);
        break;
    case '^':
        alert(exponencial);
        break;
    case '%':
        alert(modulo);
        break;
    default:
        console.log("Pues ya estaría.")
}




