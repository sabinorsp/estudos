// Novo recurso do ES2015
/*
Em Javascript, o desctructuring é uma técnica que permite extrair valores de arrays ou objetos
e atribui-los a variáveis de forma conscisa. Essa técnica torna o código mais limpo 
e legível, especialmente ao lidar com estruturas de dados complexas. 
*/
const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua ABC',
        numero:1000
    }
}

const {nome, idade} = pessoa // exemplo de destruturação, pegando os elementos nome e idade.

console.log(nome, idade)

// exemplo2
const {nome: n, idade:i} = pessoa
console.log(n, i)

//Exemplo 3
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//Exemplo 4
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)