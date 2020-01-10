import axios from 'axios'

const placas = document.getElementById('placas');

const tecla = [];
const a = [];

const url = `${location.origin}/buscarPlacas/`

const presionar = placas.addEventListener('keydown', (e) => {

    tecla.push(e.key)
        
    /* Hacer que todas las teclas que se presionen se hagan una sola cadena */
    let re = /,/g; /* ESTA ES UNA EXPRESSION REGULAR PARA REMPLAZO GLOBAL */
    let placas = tecla.toString().replace(re, '');

    
    console.log(url + placas);
    return
    /*
    axios.patch('/buscarPlacas', {
        placas: tecla
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
   

    console.info(tecla); */

})



const levantar = placas.addEventListener('keyup', (e) => {

})

