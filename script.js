//Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.
const size = { width: 2, length: 5, height: 1 } 
const getBoxVolume = (size) =>{
    let volume = 1
    for (let value of Object.values(size)){
        volume*=value
    }
    return volume
}

//console.log(getBoxVolume(size)) // returns 10

// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)
// round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }

const round = (x) =>{
    const result = {
        floor: Math.floor(x),
        ceil: Math.ceil(x),
        round: Math.round(x)
    }
    return result
}
//console.log(round(13.3))

//Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}

const merge = (obj1, obj2) =>{
    const result = {}
    for(let key in obj1){
        result[key] = obj1[key]
    }
    for(let key in obj2){
        if(!(key in result)){
            result[key] = obj2[key]
        }
    }
    return result
}
//console.log(merge(info1, info2))

//Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos


const differentiate = (obj1, obj2) =>{
    const result ={} 
    for(let key in obj1) {
        if(!(key in obj2)){
            result[key] = obj1[key]
        }
    }
    for(let key in obj2){
        if(!(key in obj1)){
            result[key] = obj2[key]
        }
    }
    return result
}

//console.log(differentiate(info1, info2)) // returns {a: 1, c: 3, d: 4}

//Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
const data = {a: 1, b: 2, c: 3}
const props = ["c", "b"]
const removeProperties = (obj, arr) => {
    const result = {}
    for(let key in obj) {
        if(!(props.includes(key))){
            result[key] = obj[key]
        }
    }
    return result
}

//console.log(removeProperties(data, props)) // returns {a: 1, b: 2}

//Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

const filterProperties = (obj, arr) => {
    const result = {}
    for (let key in obj){
        if(props.includes(key)){
            result[key] = obj[key]
        }
    }
    return result
}

//console.log(filterProperties(data, props))// returns {b: 2, c: 3}

//Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino
const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 115

const buyProducts = (obj, x) => {
    const obj2 = Object.assign({}, obj)
    for(let key in obj2) {
        if(obj2[key] <= x){
            obj2[key] = true
        } else{
            obj2[key]= false
        }
    }
    return obj2
}
//console.log(buyProducts(products, money))// returns { cookies: true, chocolate: true, soda: false}

//Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
const products2 = { cookies: 60, chocolate: 110, soda: 120, }
const money2 = 300
const canBuyAllProduct = (obj, x) => {
    const obj2 = Object.assign({}, obj)
    let totalBuy = 0
    for(let key in obj2){
        totalBuy += obj2[key]
    }
    if(totalBuy > money2) {
        return false
    } else{
        return true
    }
}

//console.log(canBuyAllProduct(products2, money2))// returns true

//Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
const score = { easy: 10, medium: 50, hard: 100}
const challenges = { easy: 3, medium: 4, hard: 2}
const getXP = (score, challenges) => {
    const { easy: countEasy, medium: countMedium, hard: countHard } = challenges;
    return ((score.easy * countEasy) + (score.medium * countMedium) + (score.hard * countHard))
}

//console.log(getXP(challenges, score))// returns 430 (3 * 10 + 4 * 50 + 2 * 100)

//Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
const string = "H3ll0 Wor1d"
const getStringInfo = string =>{
    const chars = string.split('')
    const newObject = { letters: 0, digits: 0, spaces: 0 };
    for(const char of chars) {
        if(char === " ") {
            newObject.spaces++
        }else if(!isNaN(Number(char))){
            newObject.digits++
        } else{
            newObject.letters++
        }
    }
    return newObject
    
}

//console.log(getStringInfo("H3ll0 Wor1d")) // returns { letters:  7, digits: 3, spaces: 1 }


//Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
const getParagraphInfo = str => {
    const newObject = {
        letters : 0,
        words: 0,
        sentences: 0
    }
    const chars = str.split('')
    const words = str.split(' ')
    for (const char of chars){
        if(char === "."){
            newObject.sentences++
        } else if(char !== "." && char !== " " && char!=="," && char!==";" && char!==":") {
            newObject.letters++
        }
    }
    newObject.words = words.length
    return newObject
}

//console.log(getParagraphInfo("Do. Or do not. There is no try.")) // returns { letters:  21, words: 8, sentences: 3 }

//Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula

const countWords = str =>{
    const newStr = str.toLowerCase()
    const words = newStr.split(' ')
    const newObject = {}
    for(const word of words){
        newObject.word
        newObject[word] = 0
    }

    for(const key in newObject){
        for(const word of words){
            if(key === word){
                newObject[key]++
            }
        }
    }
    return newObject
}

//console.log(countWords("El que compra pocas capas pocas capas paga")) // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }

//Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.
const parseQueryParams = url =>{
    const urlArray = url.split("?")
    const parameters = urlArray[1].split("&")
    const parametersArray = []
    const newObject ={}

    for(const parameter of parameters){
        parametersArray.push(parameter.split("="))
    }
    for(const parameter of parametersArray){
        const objectKey = parameter[0]
        newObject.objectKey
        newObject[objectKey] = parameter[1]
    }
    return newObject
}

//console.log(parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate")) // returns { keyword: "objects", language: "javascript", level: "intermediate }

//Ocurrencias en palabra
//Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)

const findOcurrencies = (text, letters, caseSensitive = true)=> {
    const words = caseSensitive === true ? text.split(" ") : text.toLowerCase().split(" ")
    const result = {}

    for(const word of words){
        const ocurrencies = {}
        for(const letter of letters) {
            ocurrencies[letter]=0
            for (let i = 0; i < word.length; i++) {
                if(word[i]===letter){
                    ocurrencies[letter]++
                }
                
            }
        }
        result[word] = ocurrencies
    }
    return result
}


//console.log(findOcurrencies("Hello World", ["o", "l"]))

/** returns
{
  hello: {
    o: 1,
    l: 2
  },   
  world: {
    o: 1,
    l: 1
  }
}
**/

//Batalla
//Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }

const fight = (fighterA, fighterB) =>{
const copyFighterA = {...fighterA}
const copyFighterB = {...fighterB}
const {name: nameA, attack: attackA, defense: defenseA} = copyFighterA
const {name: nameB, attack: attackB, defense: defenseB} = copyFighterB
let lifeA = copyFighterA.life
let lifeB = copyFighterB.life
const damageFighterA = attackA - defenseB
const damageFighterB = attackB - defenseA
    const result = { rounds: 0 }
    while(lifeA >=0 && lifeB >=0){
        lifeB -= damageFighterA
        lifeA -= damageFighterB
        result.rounds++
    }
    if(lifeA<=0){
        result.winner = nameB
    } else if (lifeB <= 0) {
        result.winner = nameA
    }
    return result
}



console.log(fight(fighterA, fighterB)) // returns { rounds: 3, winner: "Chun-Li"}
