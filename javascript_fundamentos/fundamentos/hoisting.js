/* 
O hoisting é um comportamento em javascript em que as declarações de variáveis
e funções são movidas para o topo do seu escopo durante a fase de compilação do 
código, antes da execução real do código. Isso significa que, em termos simples, 
voce pode usar uma variável ou função antes de tela declarado no seu código. 

No entanto, é importante observar que apenas as declarações são "elevadas" (hoisted)
não as atribuioções. Isso significa que a declaração de uma variável ou função é movida
para o topo, mas a atribuição real do valor à variável não é movida. Se voce tentar acessar 
o valor de uma variável antes de atribuir um valor a ela, voce 
obterá o valor 'undefined'. 
*/

console.log(x); // Retorna undefined
var x = 5;

hoistedFunction(); // Isso funciona
function hoistedFunction() {
  console.log("Hoisted function");
}