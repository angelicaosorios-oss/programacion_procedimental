var usuarios = document.getElementById(usuarios);
var producto = document.getElementById(producto);
var direccion = document.getElementById(direccion);
var nombredelusuario = document.getElementById(nombredelusuario);
var cantidad = document.getElementById(cantidad);
var metododepago = document.getElementById(metododepago);
var telefono = document.getElementById(telefono);

function ValidarDatos(nombredelusuario){
    if(producto == '' && direccion == '' && nombredelusuario == '' && cantidad == '' && metododepago == '' && telefono == '' && nombre_completo == ''){
        console.log("los campos estan vacios")
    }
    else{
        if(nombredelusuario != /[a-aZ-Z]/){
            console.log('los datos son incorrectos')
        }
        if(telefono.lenght () < 10){
            console.log('los datos son incorrectos')
        }
        if(metododepago != /[a-aZ-Z]/){
            console.log('los datos son incorrectos')
        } 
        if(cantidad == /[a-aZ-Z]/){
            console.log('los datos son incorrectos')
        } 
        if(producto != /[a-aZ-Z]/){
            console.log('los datos son incorrectos')
        } 
    }
}
