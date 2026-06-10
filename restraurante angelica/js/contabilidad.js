var nombre = document.getElementById(nombre);
var usuarios = document.getElementById(usuarios);
var ventas = document.getElementById(ventas);
var fecha = document.getElementById(fecha);
var ingresos = document.getElementById(ingresos);
var egresos = document.getElementById(egresos);
var concepto = document.getElementById(concepto);
var valor = document.getElementById(valor);

function ValidarDatos(ventas) {
    if (ventas == '' && fecha != '' && ingresos != '' && egresos != '' && concepto != '' && valor != '')
        console.log("los campos estan vacios")
    else {
        if (fecha == /[a-aZ-Z]/) {
            console.log('los datos son incorrectos')
        }
        if (ingresos == /[a-aZ-Z]/) {
            console.log('los datos son incorrectos')
        }
        if (egresos == /[a-aZ-Z]/) {
            console.log('los datos son incorrectos')
        }
        if (valor == /[a-aZ-Z]/) {
            console.log('los datos son incorrectos')
        }
    }

}