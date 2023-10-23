{ { { { var sera = 'Sera?' } } } }

console.log(sera)

/*
No caso do js, a variável definida como var tem dois escopos possíveis. 
Global ou escopo de função. Ou seja, se for criada global, independe onde está
o posicionamento dela em blocos, ela ficará global.
No escopo de função, ela fica presente somente no escopo da função. 
*/ 

function teste(){
    var local = 123
}

teste()
console.log(local)