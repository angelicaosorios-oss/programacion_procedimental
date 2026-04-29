def mostrar_mayor(lista):
    mayor = lista[0]
    for n in lista:
 
        if n > mayor:
         mayor = n
print("Mayor")
numeros = [4,9,2,7]
mostrar_mayor(numeros)