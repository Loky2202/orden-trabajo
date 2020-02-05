import Swal from 'sweetalert2';
import axios from 'axios';

const btnEliminarManto = document.getElementsByClassName('btnEliminarManto');



if(btnEliminarManto) {

    for (let i = 0; i < btnEliminarManto.length; i++) {

        btnEliminarManto[i].addEventListener('click', (e) => {

            let claseId = e.target;
            let id = claseId.dataset;

            Swal.fire({
                title: 'Esta seguro?',
                text: 'Esta opcion elimina el cliente de la base de datos',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, no estoy seguro'
            }).then((result) => {
                if (result.value) {
                    axios.delete(`/mantenimineto/eliminar/${id.idmanto}`,[ {
                        baseURL: location.origin
                    }])
                    .then(function (respuesta){
                      if(respuesta.status === 200) {
                        Swal.fire(
                        'Eliminado!',
                        respuesta.data,
                        'success'
                        )                   
                        window.location = `/listado-mantenimientos/${respuesta.data}`

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





export default btnEliminarManto;