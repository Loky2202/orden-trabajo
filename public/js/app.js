import readonlyenFormManto from './funciones/bloqueoCamposCliente'

import btnEliminar from './funciones/eliminarCliente';
import divPrincipal from './funciones/cambioValorFormEditarManto';
import btnEliminarManto from './funciones/eliminarManto';
import btnAgregarCotizacion from './funciones/cotizacionAgregar'


document.addEventListener('DOMContentLoaded', ()=> {
    readonlyenFormManto()
    foco()
    chekedCarburacion()
    nivelGasMarcador() 
})

/* AGREGA EL ATRIBUTO "checked" a todos lo input */
function foco() {
    let motor = document.getElementsByClassName('claseCheck')


    for (let index = 0; index < motor.length; index++) {
        if (motor[index].value == '1') {
            motor[index].setAttribute('checked', true)
        }

    }


}

/* AGREGA EL ATRIBUTO "checked" A LOS CAMPOS PARA LA CARBURACION */
function chekedCarburacion () {

    let carburacion = document.getElementById('valorCarburacion');

    if(carburacion) {
        let valor = carburacion.dataset.valorcarburacion || '';
        if(valor) {
            switch (valor) {
                case 'limpieza':
                    let idCarburacion1 = document.getElementById(`opcionCarburacion1`)
                    idCarburacion1.setAttribute('checked', true)
                    break;
                case 'cambio':
                        let idCarburacion2 = document.getElementById(`opcionCarburacion2`)
                        idCarburacion2.setAttribute('checked', true)
                    break;
                case 'reparacion':
                    let idCarburacion3 = document.getElementById(`opcionCarburacion3`)
                        idCarburacion3.setAttribute('checked', true)
                break;
                
            }
        }
    }
       

}


/* FUNCION PARA MARCAR EL NIVEL DE GAS */

function nivelGasMarcador () {

    let nivelGas = document.getElementById('nivelGas');
    
    if(nivelGas) {
        let valorGas = nivelGas.dataset.nivel || '';
        if(valorGas) {
            switch (valorGas) {
                case 'E':
                    let opcionNivelGas1 = document.getElementById(`opcion1`)
                    opcionNivelGas1.setAttribute('checked', true)
                    break;
                case '1/4':
                        let opcionNivelGas2 = document.getElementById(`opcion2`)
                        opcionNivelGas2.setAttribute('checked', true)
                    break;
                case '1/2':
                    let opcionNivelGas3 = document.getElementById(`opcion3`)
                        opcionNivelGas3.setAttribute('checked', true)
                break;
                case '3/4':
                    let opcionNivelGas4 = document.getElementById(`opcion4`)
                        opcionNivelGas4.setAttribute('checked', true)
                break;
                case 'F':
                    let opcionNivelGas5 = document.getElementById(`opcion5`)
                        opcionNivelGas5.setAttribute('checked', true)
                break;
                
            }
        }
    }
}
    








