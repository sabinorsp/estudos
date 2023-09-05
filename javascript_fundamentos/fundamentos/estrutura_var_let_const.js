/* 
Em JavaScript, var, let e const são palavras chaves utilizadas 
para declarar variáveis. Elas tem diferenças importantes em relação
ao escopo, reatribuição e hoisting. 
*/

/* 
var: 
    * Escopo: A variável declarada com var tem escopo de função ou global. 
    Isso significa que, se voce declarar uma variável com var dentro 
    de uma função, ela só será acessível dentro dessa função. 
    Mas se declarada fora de qualquer função, ela terá escopo global.
    
    * Hoisting: Variáveis declaradas com var são "elevadas" (hoisted)
    para o topo do seu escopo. Isso significa que elas são movidas para 
    o topo do seu escopo atual, mas são inicializadas com 'undefined' até
    que o código que define a variável seja executado. 

    * Reatribuição: Variáveis declaradas com 'var' podem ser reatribuidas.
*/

//Exemplo: 

function exemploVar(){
    console.log(a); // indefinido (devido ao hoisting)
    var a = 5;
    console.log(a); // imprime 5
    a = 10;
    console.log(a) // imprime 10 ( reatribuição)
}

/* 
let:
    * Escopo: Avariável declara com 'let' tem escopo de bloco.
    Isso significa que seu escopo é limitado ao bloco, declaração 
    ou expressão em que ela é usada. 
    
    *Hoisting: Assim como 'var', 'let' também sofre hoisintg, mas 
    a variável náo inicializada. Tentar acessar a variável antes 
    da sua declaração resultará em um erro de "temporal dead zone"

    * Reatribuição: Variável declaradas com let podem ser reatribuidas.
*/

//Exemplo: 
function exemploLet(){
    if (true){
        let b = 10;
    }
    console.log(b); // Erro, pois 'b' tem escopo de bloco.
}

/*
const: 
    * Escopo: Assim como 'let', 'const' também tem escopo de bloco.
    
    * Hoisting: 'const' também sofre hoisting e tem o mesmo comportamento
    da 'temporal dead zone' como let. 

    *Reatribuição: Variáveis declaradas com const não podem ser reatribuidas.
    Além disso, elas devem ser inicializadas no momento da declaração. 

    * Nota: Embora uma variável const não possa reatribuida, 
    se ela for um objeto ou array, os valores dentro do objeto ou array 
    ainda podem ser alterados. 
*/

// Exemplo:
function exemploConst(){
    const c = 20;
    c = 30; // erro, pois c é uma constante e não pode ser alterada

    const obj = {key:'value'};
    obj.key = 'new value'; // Isso é permitido, pois estamos modificado uma propriedade do objeto e não reatribuindo 'obj'.
}

/* Em resumo:
* use var se voce precisa de escopo de função ou se estiver trabalhando
em um ambiente ECMAScripot 5 ou anteior. 
* use let quando quiser declarar uma variavel com escopo de bloco e que pode ser 
reatribuida
* use const quando quiser declarar uma variável quenão deve ser reatribuida. 

o uso de let e const sobre var é mais procurado devido a seus escopos 
mais previsíveis e a capacidade de evitar reatribuição acidentais. 
*/