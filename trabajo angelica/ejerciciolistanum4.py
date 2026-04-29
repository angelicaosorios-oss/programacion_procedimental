numeros = [4,8,12,16]
buscar = int(input("Número a buscar"))
encontrado = False

for n in numeros:
    if n == buscar:  
     encontrado = True
if encontrado:
    print("si esta" ,buscar)
else:
    print("No esta",buscar)