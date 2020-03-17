const axios = require('axios');

const botonAgregar = document.getElementById('agregar');
const cantidad = document.getElementById('cantidad');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
var i = 0;
var cantidadArray = [];
var descripcionArray = [];
var precioArray = [];
var cotiz = [];
const btnAgregarCotizacion = botonAgregar.addEventListener('click', (e) => {

    cantidadArray[i] = cantidad.value
    descripcionArray[i] = descripcion.value;
    precioArray[i] = precio.value;
    const divhtml = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.info(divhtml.lastElementChild.parentChilde);
    i++;
})






export default btnAgregarCotizacion;