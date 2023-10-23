//  Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}


imprimirSoma(2,3)


// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}


// retorno implicito, função com uma única sentença de código, ou seja um retorno implicito
const substracao = (a, b) => a - b
console.log(substracao(2,3))

const imprimir2 = a => console.log(a*a)

imprimir2(10)