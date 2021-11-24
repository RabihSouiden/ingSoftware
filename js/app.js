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
function iniciarSesion() {
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




function registerData() {
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




function login() {
    event.preventDefault();
    let storeUser = JSON.parse(localStorage.getItem('user'));
    console.log(document.getElementById("loginMail").value)
    console.log(storeUser.mail)
    if (document.getElementById("loginMail").value == storeUser.mail) {

        if (document.getElementById("loginPssw").value == storeUser.pssw) {
            window.location.href = "mapa.html";
        } else {
            alert('Contraseña incorrecta');
        }
        console.log("TEST LOGIN")
    } else {
        alert('Usuario Incorrecto');
    }
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    });
    var input = document.getElementById('searchInput');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      
        // Location details
        for (var i = 0; i < place.address_components.length; i++) {
            if(place.address_components[i].types[0] == 'postal_code'){
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0] == 'country'){
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
            }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
    });
}