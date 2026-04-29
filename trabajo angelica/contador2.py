contador = 0
for i in range(5):
 num = int(input("ingrese numer:"))
if num % 2 == 0:
 contador += 1
print("cantidad de numeros iguales", contador)