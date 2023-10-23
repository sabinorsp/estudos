var numero = 1

{
    var numero = 2
    console.log('dentro=', numero)
}

console.log('fora = ', numero)

/*
Nesse caso a variável número é sobre escrita, pois a variável var nesse caso, 
é definida globalmente. 
Obs: Uma dica é fugir da definição de variável no escopo global. 
*/