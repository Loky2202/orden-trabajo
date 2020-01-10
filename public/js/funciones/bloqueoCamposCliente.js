function readonlyenFormManto () {

    const pag = window.location.pathname;

    if(pag === '/buscarPlacas') {
        const algo =  document.querySelectorAll('.agregarreadonly')

       for(let i = 0; i < algo.length; i++) {
            algo[i].setAttribute('readonly', true)
            
       }
    }  

}

export default readonlyenFormManto;