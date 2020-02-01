import Swal from 'sweetalert2'
import axios from 'axios'

const btnEliminar = document.getElementsByClassName('btnBorrar')


if(btnEliminar) {

    for (let i = 0; i < btnEliminar.length; i++) {
      
      btnEliminar[i].addEventListener('click', (e) => {
          
        const claseId = e.target;
        const id = claseId.dataset;
        const url = `${location.origin}/cliente/${id.cliente}`

          Swal.fire({
              title: 'Esta seguro?',
              text: 'Esta opcion elimina el cliente de la base de datos',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Si, eliminar!',
              cancelButtonText: 'No, no estoy seguro'
          }).then((result) => {
              if (result.value) {
                axios.delete(url, { params: id })
                  .then(function (respuesta){
                    if(respuesta.status === 200) {
                      Swal.fire(
                      'Eliminado!',
                      respuesta.data,
                      'success'
                      )
                      window.location = '/lista-placas'
                    }
                    
                  })
                  .catch(function (error) {
                    console.error(error)
                  })
                
    
              } else {
                Swal.fire(
                  'Cancelado',
                  'Cliente NO eliminado',
                  'error'
                )
              }
          })
        
      })
      
    }

    
  }
export default btnEliminar;


