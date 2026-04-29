numeros = [3,6,9]
buscar = int(input("Número"))
encontrado = False
for n in numeros:
 if n == buscar:
  encontrado = True
if encontrado:
 print("Está en la lista")
else:
 print("No está")