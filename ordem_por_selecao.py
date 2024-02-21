def buscaMenor(arr):
    """
    Seleciona o menor valor dentro da lista

    Args:
        arr(list) -> lista com números inteiros;
    
    Retorna:
        menor_indice -> Menor valor encontrado na lista
    """
    menor = arr[0]
    menor_indice = 0
    for index in range (1, len(arr)):
        if arr[index] < menor:
            menor = arr[index]
            menor_indice = index
    return menor_indice


def ordenacaoporSelecao(arr):
    """
    Realiza a busca dos menores valores em arr e coloca em ordem crescente

    Args:
        arr(list) -> lista com números inteiros;
    Retorna:
        novoArr -> lista com os números ordenados crescente.
    """

    novoArr = []
    for index in range(len(arr)):
        menor = buscaMenor(arr)
        novoArr.append(arr.pop(menor))
    return novoArr


print(ordenacaoporSelecao([2, 0 , 4, 5, 3, 10, 55]))
