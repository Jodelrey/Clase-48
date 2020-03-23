//OBJETOS

//Son una estructura de datos, como los arrays. Es decir, no contienen un solo dato (como puede ser un numero o un string), sino que pueden tener un conjunto de datos estructurados de una cierta forma. 
//La estructura que utilizan se llama par key-value. 
const personaje = {
    key: value
}

//Key o propiedad:
//Como propiedad podemos tener cualquier palabra, numeros o strings. Todas las propiedades en un objeto son strings. Si estan formadas por mas de una palabra deben llevar comillas.

//Value
//El valor puede ser cualquier tipo de valor valido en js. Las funciones que son valores de propiedades de un objeto se denominan metodos.
//Tambien puede contener otros objetos. 
//Para acceder a las propiedades se usa la notacion de punto.

Ej: objeto.propiedad

const personaje = {
    nombre: luke,
    apellido: "Skywalker",
    edad: 23,
    profesion: 'Jedi',
    poderes: true,
    amigues: ['Han Solo', 'Chewaka'],
    origen: {
        galaxia: 'sasdsads',
        plantea: 'dsads',
        ciudad: 'sdasdsa'
    }
}

personaje.nombre

//RESUMEN:
//Toda propiedad es un string, si es una sola palabra puede ir sin comillas, si son varias van con comillas
//Como valor cualquier dato valido en js. Strings, booleanos, arrays, funciones, etc

//El array como estructura es un objeto. Los indices son las propiedades y los items del array son los valores

//Se pueden modificar las propiedades asignandole un nuevo valor
personaje.nombre = 'Leia'

//Tambien se pueden agregar nuevas propiedades con nuevos valores
//Ejemplo le quiero agregar una propiedad. Se usa notacion de punto y se agrega a continuacion la propiedad que queremos

personaje.propiedad = "dasdeef"

const personajeStarWars = {}
personajeStarWars.nombreCompleto = 'Leia Skywalker'

//Si como propiedad tiene un objeto, para agregarle las propiedades al objeto interno:

const personaje = {}
//Le agregamos una propiedad que sea otro objeto vacio
personaje.nombreCompleto = {}
//Para agregarle una propiedad a este objeto interno y su valor uso notacion de punto anidando ambos objetos y seguido de la propiedad
personaje.nombreCompleto.nombre = 'Leia'
personaje.nombreCompleto.apellido = 'Skywalker'

//Para acceder a las propiedades internas hay que hacer el recorrido
personaje.nombreCompleto.nombre

//Tambien se puede acceder a las propiedades con notacion de corchetes
personaje["nombreCompleto"]
//En caso de que la propiedad sea un string de varias palabras SI O SI se usa notacion de corchetes
personaje["nombre completo"] = 'Leia Skywalker'

//En caso de que hayamos almacenado en una variable la propiedad, se accede con notacion de corchete
const propiedad = "nombre completo"
personaje[propiedad]

const propiedadParcial = 'nombre'
personaje[propiedadParcial + 'Completo'] //es lo mismo que personaje.nombreCompleto

//Tambien se puede usar para agregar valores de forma dinamica
const ingreso = prompt("que valores desea ingresar").split(' ')
personaje[ingreso[0]] = ingreso[1]//lo primero ingresado va a ser la propiedad, lo segundo el valor

//Operador in
//permite saber si existe una propiedad en un objeto. Ej
"nombreCompleto" in personaje
//Se debe ingresar la propiedad entre comillas para que lo tome como string. Sino lo va a tomar como variable, la variable no existe y va a tirar error

//Para acceder de forma segura se pueden utilizar operadores logicos

console.log(personaje.origen && personaje.origen.planeta) //utilizando && al ser el primer termino undefined, lo segundo no se lee y no ocasiona el error

//Como el operador in esta relacionado con las propiedades, es decir, con las keys de una estructura de datos, podemos utilizar el for in para recorrer las propiedades de un objeto

for(let prop in personaje){
    console.log(prop)
}

//For of no puede usarse directamente para acceder a los valores del objeto porque los objetos no son iterables. 
//Para eso podemos utilizar Object.values -> lo muestra como si fuera un array

for(let value of Object.values(personaje)){
    console.log(value)
}

//Para acceder a las propiedades se usa 
Object.keys(personaje)

//Los objetos son datos no primitivos. Si creo un objeto, luego lo asigno a otro objeto, si cambio la propiedad nombre de otraPersona tambien se va a ver afectado en el objeto original 
//Se le asigna el objeto. Ambos objetos apuntan al mismo. Cualquier modificacion que le haga a la propiedad a uno se modifica en el otro
const persona = {
    nombre: 'Luke'
}

const otraPersona = persona
otraPersona.nombre = 'Leia'
persona.nombre  //va a dar 'Leia'

//Para evitar esto se puede crear un objeto igual
const otroPersonaje = Object.assign({}, persona)
//En este caso, si modifico la propiedad nombre no se modifica en el objeto original

//Object.assign asigna a un objeto las propiedadades de uno o mas objetos. Crea copias, no son la misma entidad

const persona = {
    nombre: 'Leia'
}
const apellido = {
    apellido: 'Skywalker'
}

Object.assign(persona, apellido) //Se le pueden pasar varios objetos separados por comas. En este caso persona es el objeto objetivo al cual se le asignan las propiedades del objeto apellido

//Cuando queremos hacer una copia de un objeto a un nuevo objeto lo que hacemos es con Object.assign primero asignarle un objeto vacio y luego las propiedades del objeto u objetos que queremos copiar
const otraPersona = Object.assign({}, persona)
