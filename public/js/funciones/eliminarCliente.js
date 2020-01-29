import Swal from 'sweetalert2'

const btnEliminar = document.getElementsByClassName('btnBorrar')


if(btnEliminar) {

    for (let i = 0; i < btnEliminar.length; i++) {
      
      btnEliminar[i].addEventListener('click', () => {
          Swal.fire({
              title: 'Esta seguro?',
              text: 'Esta opcion elimina el cliente de la base de datos',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Si, eliminar!',
              cancelButtonText: 'No, no estoy seguro'
          }).then((result) => {
              if (result.value) {
                Swal.fire(
                  'Eliminado!',
                  'El cliente fue eliminado.',
                  'success'
                )
    
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


