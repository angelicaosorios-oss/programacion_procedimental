#Contar cuántos números son mayores a 10
contador = 0
for i in range(5):
 numero = int(input("ingrese numero"))
if numero > 10:
 contador += 1
print("mayor a 10", contador)


