function enviarMensaje(){
    const nombre = document.getElementById("nombre")
    const correo = document.getElementById("correo")
    const mensaje = document.getElementById("mensaje")

    //const datos_validados = validarDatos(nombre) && validarDatos(correo) && validarDatos(mensaje)

    let valida_nom = validarDatos(nombre);
    let valida_email = validarDatos(correo);
    let valida_msj = validarDatos(mensaje);

    if(valida_nom && valida_email && valida_msj){
        
    }else{
        
    }
    
    return false
} 

function validarDatos(elemento){
    let validacion = false;
    let valor_elemento = elemento.value;
    if(valor_elemento != "" && valor_elemento != null){
        quitarError(elemento);
        validacion = true;
    }else{
        mostrarErro(elemento);
        validacion = false;
    }
    return validacion
}

function quitarError(elemento){
    elemento.classList.remove('input-error');
}

function mostrarErro(elemento){
    elemento.classList.add('input-error');
}