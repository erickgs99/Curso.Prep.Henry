Explicación de tarea 1 JS

Variables: 
Las variables se componen de 3 partes
1.- var: la cual es la función
2.- nombre asignado: tu puedes asignar un nombre a la variable
3.- argumento: es el contenido agregado dentro de la variable
Ejemplo: var nombre = Erick Gutierrez
En este ejemplo he empleado la función var, seguido del nombre que llevara que es "nombre", = (significa asignación), el contenido que en este caso es Erick Gutierrez
Cabe resaltar que una variable es un dato que se puede cambiar, no forzosamente tiene que llevar ese nombre o ese contenido, por eso es variable

let: tiene el mismo principio y funcionamiento que var, pero según tengo entendido solo se usa en código HTML

const: Se refiere a constante, quiere decir que es un dato que siempre va a ser el mismo, es decir que no va a cambiar, aunque su sintaxis tiene el mismo principio que la de var

consol.log: esta es una forma de agrupación, lo que quiere decir que se usa para mostrar un listado de conceptos previamente seleccionados, su sintaxis sería console.log(obj1 [, obj2, ..., objN])

instrumentos de cuerda: 
Los instrumentos de texto son llamados string, es una forma de agregar texto, su sintaxis es '', es decir que para que sea una string el texto a agregar debe ir entre comillas "" ó ''

Funciones: 
Una función es básicamente una forma de invocar objetos, se usan para calcular o cambiar las variables. en JS siempre se escribe function, para que el sistema sepa que lo que sigue es una función y sea ejecutado como tal.
Su sintaxis es function miFuncion () {}
Es importante mencionar que las funciones deben ser escritas tal cual estan establecidas de lo contrario no funcionarán y es posible que devuelvan un error
Una vez redactada correctamente la funcion se usa return para que devuelva el valor o resultado de la ejecución

Declaración if:
if al español se traduce como sí, es decir sí yo hago esto pasará esto ó esto, se usa normalmente cuando el resultado será true (cierto) ó falso (false)
Un ejemplo sería "si yo tengo 17 años puedo manejar", la función if se encargara de ejecutar la operación y devolverá el valor true ó false dependiendo de los datos introducidos
Ejemplo: 
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num < 90 ){
    return true
  } else { 
    return false

  }
}
En esta función previamente se le asigno un número a la variable num para poder ser ejecutada, si solo se ejecuta una variable sin un valor dentro no devolverá nada


Valores booleanos: 
Esta basado en código binario 0 1, lo que quiere decir que tiene dos posibles respuestas, true or false
