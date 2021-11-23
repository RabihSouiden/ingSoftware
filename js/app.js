//Ejecutando funciones

document.getElementById("iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("registrarse").addEventListener("click", registrarse);
window.addEventListener("resize", tamañoPagina);
document.getElementById("formulario")



//Declarando variables
let ingresar = document.getElementById("ingreso")
let agregarUsuario = document.getElementById("registro")
let formulario_ingreso = document.querySelector(".formulario-ingreso");
let formulario_registro = document.querySelector(".formulario-registro");
let contenedor_ingreso_registro = document.querySelector(".contenedor-ingreso-registro");
let caja_posterior_ingreso = document.querySelector(".caja-posterior-ingreso");
let caja_posterior_registro = document.querySelector(".caja-posterior-registro"); 

let registrar = document.getElementById("registro")

//FUNCIONES
function iniciarSesion(){
    event.preventDefault();
}

function tamañoPagina() {

    if (window.innerWidth > 850) {
        caja_posterior_registro.style.display = "block";
        caja_posterior_ingreso.style.display = "block";
    } else {
        caja_posterior_registro.style.display = "block";
        caja_posterior_registro.style.opacity = "1";
        caja_posterior_ingreso.style.display = "none";
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_registro.style.display = "none";
    }
}

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "10px";
        formulario_registro.style.display = "none";
        caja_posterior_registro.style.opacity = "1";
        caja_posterior_ingreso.style.opacity = "0";
    } else {
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_registro.style.display = "none";
        caja_posterior_registro.style.display = "block";
        caja_posterior_ingreso.style.display = "none";
    }
}

function registrarse() {
    if (window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "410px";
        formulario_ingreso.style.display = "none";
        caja_posterior_registro.style.opacity = "0";
        caja_posterior_ingreso.style.opacity = "1";
    } else {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_ingreso.style.display = "none";
        caja_posterior_registro.style.display = "none";
        caja_posterior_ingreso.style.display = "block";
        caja_posterior_ingreso.style.opacity = "1";
    }
}




function registerData(){
            console.log(document.getElementById("regisName").value)
            let userToSave = {
                'name': document.getElementById("regisName").value,
                'mail': document.getElementById("regisMail").value,
                'pssw': document.getElementById("regisPssw").value
            }
            let jsonUser = JSON.stringify(userToSave);
            localStorage.setItem('user', jsonUser);
            console.log('this is  a test');
        }




        function login(){
            event.preventDefault();
            var storeUser = JSON.parse(localStorage.getItem('user'));
            console.log(document.getElementById("loginMail").value)
            console.log(storeUser.mail)
            if( document.getElementById("loginMail").value == storeUser.mail){

                if(document.getElementById("loginPssw").value == storeUser.pssw){
                    window.location.href = "mapa.html";
                }else{
                    alert('Contraseña incorrecta');
                }
                console.log("TEST LOGIN")
            }else{
                alert('Usuario Incorrecto');
            }
        }



