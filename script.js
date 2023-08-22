/* Obtener los valores */
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const tel = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const confirma_contra = document.getElementById("confirmacion-contraseña");
const seleccionar = document.getElementById("seleccion");
const patron = /[a-zA-Z]+@./;

nombre.addEventListener("focusout", (e) => {
    if (e.target.value.length > 2){
        e.target.classList.add("valido");
    }else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

apellidos.addEventListener("focusout", (e) => {
    if (e.target.value.length > 3){
        e.target.classList.add("valido");
    }else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

email.addEventListener("focusout", (e) => {
    const correo = e.target.value;
    if(correo.match(patron)){
        e.target.classList.add("valido");
    }else{
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

tel.addEventListener("focusout", (e) => {
    const patronNumerico = /^[\d]*$/;
    if(patronNumerico.test(e.target.value) && e.target.value.length == 10){
        e.target.classList.add("valido");
    }else{
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

contraseña.addEventListener("focusout", (e) => {
    const patronContra = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const contra = e.target.value;
    
    if (contra.match(patronContra)) {
        e.target.classList.add("valido");
    } else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

confirma_contra.addEventListener("focusout", (e) => {
    const original = contraseña.value;
    const confirmacion = e.target.value;

    if (confirmacion === original) {
        e.target.classList.add("valido");
    } else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
    }
});

seleccionar.addEventListener("click", (e) => {
    if(e.target.value != "vacio"){
        e.target.classList.add("opc");
    }
});