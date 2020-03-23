describe("getBoxVolume()", (size) => {

    it("debería devolver el volumen de una caja cuando se le pase un objeto con las medidas de la misma", () => {
        const size = { width: 2, length: 5, height: 1 } 
        
        expect(getBoxVolume(size)).to.equal(10)
    })
})

describe("round()", (number) => {

    it("Deberia retornar un objeto", () =>{
        const number = 13.3;
        const resultado = round(number);
        expect(resultado).to.be.an("object")
    })

    it("Deberia devolver un objeto con las propiedades floor, ceil y round del numero pasado por parametro", () => {
        const num1 = 13.3
        const num2 = 9.6
        const result1 = round(num1)
        const result2 = round(num2)
        expect(result1).to.eql({floor: 13, ceil: 14, round: 13})
        expect(result2).to.eql({floor: 9, ceil: 10, round: 10})
    })
})

describe("merge()", (obj1, obj2) => {
    it("Deberia retornar un objeto", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = merge(info1, info2) 
        expect(resultado).to.be.an("object") 
    })

    it("Deberia devolver un objeto que una las propiedades de dos objetos, priorizando las del primero en caso de que se repitan propiedades", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = merge(info1, info2) 
        expect(resultado).to.eql({a: 1, b: 2, c: 3, d: 4})
    })
})

describe("differentiate()", (obj1, obj2) => {
    it("Deberia retornar un objeto", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = differentiate(info1, info2)
        expect(resultado).to.be.an("object") 
    })
    it("Deberia retornar un objeto que excluya las propiedades repetidas en los objetos pasados como parametro", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = differentiate(info1, info2)
        expect(resultado).to.eql({a: 1, c: 3, d: 4})
    })
})

describe("removeProperties()", (obj, arr) => {
    it("Deberia retornar un objeto", () => {
        const data = {a: 1, b: 2, c: 3}
        const props = ["c", "b"]
        const result = removeProperties(data, props)
        expect(result).to.be.an("object") 
    })
    it("Deberia retornar un objeto con las propiedades del objeto que se pasa como parametro, excluyendo las propiedades que contiene el array", () => {
        const data = {a: 1, b: 2, c: 3}
        const props = ["c", "b"]
        const result = removeProperties(data, props)
        expect(result).to.eql({a: 1})
    })
})

describe("filterProperties()", (obj, arr) => {
    it("Deberia retornar un objeto", () => {
        const data = {a: 1, b: 2, c: 3}
        const props = ["c", "b"]
        const result = filterProperties(data, props)
        expect(result).to.be.an("object") 
    })
    it("Deberia retornar un objeto, que unicamente incluya las propiedades del objeto que se pasa como parametro especificadas en los elementos del array que se pasa como paramentro", () => {
        const data = {a: 1, b: 2, c: 3}
        const props = ["c", "b"]
        const result = filterProperties(data, props)
        expect(result).to.eql({b: 2, c: 3})
    })
})

describe("buyProducts()", (products, money) => {
    it("Deberia retornar un objeto", () => {
        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115   
        const result = buyProducts(products, money)
        expect(result).to.be.an("object")
    })
    it("Deberia retornar un objeto cuyos valores sean true en caso de que se pueda comprar el producto con el dinero pasado como parametro o false caso contrario", () => {
        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115   
        const result = buyProducts(products, money)
        expect(result).to.eql({cookies: true, chocolate: true, soda: false})
    })
})
describe("canBuyAllProduct()", (money, products) => {
    it("Deberia retornar un booleano", () => {
        const products2 = { cookies: 60, chocolate: 110, soda: 120, }
        const money2 = 300
        const result = canBuyAllProduct(products2, money2)
        expect(result).to.be.a("boolean")
    })
    it("Deberia retornar true, si dado un objeto con una lista de productos y precio y un monto maximo, se pueden comprar todos los productos del objeto", () => {
        const products2 = { cookies: 60, chocolate: 110, soda: 120, }
        const money2 = 300
        const result = canBuyAllProduct(products2, money2)
        expect(result).to.be.true
    })
})
describe("getXP()", (score, challenges) => {
    it("Deberia retornar un numero", () => {
        const score = { easy: 10, medium: 50, hard: 100}
        const challenges = { easy: 3, medium: 4, hard: 2}
        const result = getXP(score, challenges)
        expect(result).to.be.finite
    })
    it("Deberia devolver la suma del XP", () => {
        const score = { easy: 10, medium: 50, hard: 100}
        const challenges = { easy: 3, medium: 4, hard: 2}
        const result = getXP(score, challenges)
        expect(result).to.equal(430)
    })
})

describe("getStringInfo()", (string) => {
    it("Deberia devolver un objeto", () =>{
        const string = "H3ll0 Wor1d"
        const result = getStringInfo(string)
        expect(result).to.be.an("object")
    })
    it("Deberia devolver un objeto con la cantidad de letras, espacios y numeros que contiene el string", () =>{
        const string = "H3ll0 Wor1d"
        const result = getStringInfo(string)
        expect(result).to.eql({ letters:  7, digits: 3, spaces: 1 })
    })
})

describe("getParagraphInfo()", (str) => {
    it("Deberia retornar un objeto", () => {
        const string = "Do. Or do not. There is no try."
        const result = getParagraphInfo(string)
        expect(result).to.be.an("object")
    })
    it("Deberia retornar un objeto que cuente las palabras, letras y oraciones del string que se pasa por parametro", () => {
        const string = "Do. Or do not. There is no try."
        const result = getParagraphInfo(string)
        expect(result).to.eql({ letters:  21, words: 8, sentences: 3 })

    })
})

describe("countWords()", (str) =>{
    it("Deberia retornar un objeto", () => {
        const str = "El que compra pocas capas pocas capas paga"
        const result = countWords(str)
        expect(result).to.be.an("object")
    })
    it("Deberia retornar un objeto que cuente las palabras, sin contar las que se repiten y sin distinguir mayusculas de minusculas", () =>{
        const str = "El que compra pocas capas pocas capas paga"
        const result = countWords(str)
        expect(result).to.eql({ el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 })
    })
})

describe("findOcurrencies()", (str, array, caseSensitive = true) => {
    it("Debería devolver un objeto", () => {
        const text = "Hello World"
        const letterArray = ["o", "l"]
        const caseSensitive = true
        const resultado = findOcurrencies(text, letterArray, caseSensitive);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto con la cantidad de las letras de dado array que hay en cada palabra", () => {
        const text = "Hello World"
        const letterArray = ["o", "l"]
        const caseSensitive = false
        const resultado = findOcurrencies(text, letterArray, caseSensitive);

        expect(resultado).to.eql({ hello: { o: 1, l: 2 }, world: { o: 1, l: 1 } });
    })
})

describe("fight()", (fighterA, fighterB) => {
    it("Deberia retornar un objeto", () =>{
        const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
        const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }
        const result = fight(fighterA, fighterB)
        expect(result).to.be.an("object")
    })
    it("Deberia retornar un objeto que detalle la cantidad de rondas y el ganador de la partida", () => {
        const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
        const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }
        const result = fight(fighterA, fighterB)
        expect(result).to.eql({rounds: 3, winner: "Chun-Li"})
    })
})