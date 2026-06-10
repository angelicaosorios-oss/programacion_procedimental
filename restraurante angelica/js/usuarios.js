var nombre_completo = document.getElementById(nombre_completo);
var telefono = document.getElementById(telefono);
var direccion = document.getElementById(direccion);
var email = document.getElementById(email);
var contraseña = document.getElementById(contraseña);
var fecha_nacimiento = document.getElementById(fecha_nacimiento);
var documento_identidad =document.getElementById(documento_identidad);
var estado_civil = document.getElementById(estado_civil);
var grupo_sanguineo =document.getElementById(grupo_sanguineo);
var genero = document.getElementById(genero);
var profesion = document.getElementById(profesion);
var rol = document.getElementById(rol);


function ValidarDatos(){

    if(nombre_completo == '' || telefono == '' || email == '' || direccion == '' || contraseña == '' || fecha_nacimiento == '' || documento_identidad == '' || estado_civil == '' || grupo_sanguineo == '' || genero == '' || profesion == '' || rol == '' ){
         console.log("los campos estan vacios")
    }
else {
    if(nombre_completo != /[a-zA-z]/){
            console.log('los datos son incorrectos')
        }
        if(telefono.length () > 10){
            console.log("los datos son incorectos")
        }
        if(email != /[@]/){
            console.log("los datos son incorrectos")
        }
}
       if(documento_identidad == /[a-zA-Z]/){
        console.log('los datos son incorrectos')
       }

       if(contraseña.length () < 8){
        console.log("los datos son incorrectos")
       }

}
   
