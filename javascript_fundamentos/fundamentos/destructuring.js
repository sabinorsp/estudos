// Novo recurso do ES2015

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