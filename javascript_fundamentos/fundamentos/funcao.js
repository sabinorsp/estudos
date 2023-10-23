// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

// Podemos passar somente um valor para a função, o valor ausente ele atribui como undefined.
imprimirSoma(2)


//Funcao com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(2,10))

// Uma particularidade das funções js é que ela não liga muito para os atributos
// Ou seja, caso não seja passado os atributos corretamente, ele não retorna mensagens de erro
// Ou atribui NaN ou ignora. 