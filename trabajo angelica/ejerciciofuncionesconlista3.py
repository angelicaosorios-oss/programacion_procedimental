numeros = [5,10,15]

def mostrar_lista(num):
    for n in num:

     mostrar_lista(numeros)
promedio = sum(numeros) / len(numeros)
print(promedio)