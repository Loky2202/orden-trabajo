
import $ from "jquery";


/* let campoCheck = $('#checkmotorCambioAceite').click(() => {

    console.log(campoCheck)
    
    if(campoCheck.val() == 1) {
        campoCheck.val("0")
    }else{
        campoCheck.val("1")
    }

})
 */

const campoCheck = [];

 for (let i = 1; i <= 25; i++) {

    campoCheck[i] = $(`#campoCheck${i}`).click((e) => {
        
        if(campoCheck[i].val() == 1) {
            campoCheck[i].val(2) 
            $(`#campo${i}`).val(2)
        }else{
            campoCheck[i].val(1) 
            $(`#campo${i}`).val(1)
        }

        console.log(campoCheck[i].val())
        
    })
     
 }













export default campoCheck;
