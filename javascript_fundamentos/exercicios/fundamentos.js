// Crie uma funçlão que retorna a string "Olá", concatenada com um argumento text
// a ser passado para função e com ponto de exclamação "!" no final.
const comprimentar = function (nome){
    console.log(`Olá, ${nome}!`)
}
console.log('Resultado Exercicio 1:')
comprimentar('Leonardo')


/* Escreva uma função que receba a idade de uma pessoa em anos retorne a mesma idade em dias.*/
function converter_idade_dias(idade_anos){
    console.log(idade_dias = idade_anos*365)
}
console.log('R - Exercicio2:')
converter_idade_dias(25)
converter_idade_dias(70)


/*Desenvolva uma função que recebe dois parametros, um é a quantidade de horas
trabalhadas por um funcionário num mes, e o quanto ele recebe por hora. 
O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário
ganhou no mês. */
function calcula_salario(horas_trabalhadas, valor_hora){
    salario = horas_trabalhadas*valor_hora
    console.log(`Salário igual à R$ ${salario}`)
}
console.log('R - Ex3: ')
calcula_salario(150, 40.5)


/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2ºmes.
*/
function converte_numero_mes(num_mes){
    if (num_mes >= 1 && num_mes <=12 ){
        const nome_mes = {
            1: 'janeiro',
            2: 'fevereiro',
            3: 'março',
            4: 'abril',
            5: 'maio',
            6: 'junho',
            7: 'julho',
            8: 'agosto',
            9: 'setembro',
            10: 'outubro',
            11: 'novembro',
            12: 'dezembro'
        } 
        console.log(nome_mes[num_mes])
    } else{
        console.log(`O número ${num_mes} inserido não é válido.`)
    }   
}
console.log('R - Ex4:')
converte_numero_mes(12)


/*Cria uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */
function verifica_numeros(num_primeiro, num_segundo){
    if(typeof num_primeiro=='string' || typeof num_segundo == 'string'){
        console.log(false)
    }else{
        const resultado = num_primeiro => num_primeiro >= num_segundo ? true: false
        console.log(resultado(num_primeiro))
    }
}
console.log('R - Ex5:')
verifica_numeros(3,'3')


/* Escreva uma função que receba um valor booleano ou numérico. Se o parametro fornecido for
booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará
true. Se o parametro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1,
o retorno será -1. Se o parametro de entrada não for de nenhum dos tipos acima, retorne "booleano
ou número esperados, mas o parametro é do tipo.." */
function inverso(valor){
    if (typeof valor == "boolean" || typeof valor == 'number'){
        if (typeof valor == "boolean"){
            console.log(!valor)
        }else{
            console.log(-valor)
        }
    }else{
        console.log(`booleano ou numero esperados, mas o parametro é do tipo ${typeof valor}.`)
    }
}
console.log('R - Ex6:')
inverso(23)


/*
Crie uma função que receba quatro números como parametros (numero, minimo, maximo, inclusivo)
e retorne se o parametro numero ( o primeiro) está entre minimo e maximo. Quando o parametro
inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a 
minimo ou a maximo. Caso o parametro inclusivo não seja informado, seu valor padrão deverá ser
false, portanto, a lógico será exclusiva, não considerando se numero é igual a minimo ou a máximo.
 */
function estaEntre(numero, minimo, maximo, inclusivo=false){
    if (inclusivo == false){
        if (numero > minimo && numero < maximo){
            console.log(`Número ${numero} está entre o ${minimo} e ${maximo}....`)
        }else{
            console.log(`O número não está entre os intervalos de ${minimo} e ${maximo}`)
        }
    }else{
        if (numero >= minimo && numero <= maximo){
            console.log(`Número ${numero} está entre o ${minimo} e ${maximo}`)
        }else{
            console.log(`O número não está entre os intervalos de ${minimo} e ${maximo}`)
        }
    }
}
console.log('R - Ex7:')
estaEntre(10,10,20, inclusivo = true)


/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.
*/
function multiplicar(num1, num2){
    let soma = 0
    for(let i=1; i <= num1; i++){
        soma += num2
    }
    console.log(`O valor da multiplicação entre ${num1} e ${num2} é igual: ${soma}`)
}
console.log('R - Ex8:')
multiplicar(5,8)
