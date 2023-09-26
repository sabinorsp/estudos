// Array é uma forma de agrupar multiplos valores em um vetor ou uma única lista. 
// Esses elementos podem ser acesso através de seus index.
// Essa estrutura é semelhante a lista do python

//Exemplo
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// Atribuindo valores dado um indice
valores[2] = 100
console.log(valores)
//Verificando comprimento do array
console.log(valores.length)
// Adicionando novos elementos:
valores.push({id:3}, false, null, 'Teste')
console.log(valores)

// O ideal é que mantenha-se uma homogenidade de dados no array. 