contador = 0
for i in range(5):
 numero = int(input("ingrese numero: "))
 if numero < 0:
     contador += 1
print("numeros negativos" , contador)