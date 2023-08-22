/* Obtener los valores */
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const tel = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const confirma_contra = document.getElementById("confirmacion-contraseña");
const seleccionar = document.getElementById("seleccion");
const patron = /[a-zA-Z]+@./;

/* Obtener las clases para avisar que se necesita */
const nom = document.getElementsByClassName("nombre");
const ape = document.getElementsByClassName("apellidos");
const corr = document.getElementsByClassName("email");
const telefono = document.getElementsByClassName("tel");
const contra_or = document.getElementsByClassName("contra");
const confirma = document.getElementsByClassName("confirma");

/*Control de valides*/
nombre.addEventListener("input", (e) => {
    const valor = e.target.value;
    
    if (valor.length > 2) {
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        nom[0].innerText = "";
    } else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        nom[0].innerText = "Este campo necesita 3 letras o más";
    }
});

apellidos.addEventListener("input", (e) => {
    if (e.target.value.length > 3){
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        ape[0].innerText = "";
    }else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        ape[0].innerText = "Este campo necesita 4 letras o más";
    }
});

email.addEventListener("input", (e) => {
    const correo = e.target.value;
    if(correo.match(patron)){
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        corr[0].innerText = "";
    }else{
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        corr[0].innerText = "Este campo requiere al menos un @ y un punto";
    }
});

tel.addEventListener("input", (e) => {
    const patronNumerico = /^[\d]*$/;
    if(patronNumerico.test(e.target.value) && e.target.value.length == 10){
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        telefono[0].innerText = "";
    }else{
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        telefono[0].innerText = "Este campo requiere un número de 10 digitos"
    }
});

contraseña.addEventListener("input", (e) => {
    const patronContra = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const contra = e.target.value;
    
    if (contra.match(patronContra)) {
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        contra_or[0].innerText = "";
    } else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        contra_or[0].innerText = "La contraseña debe tener un digito numérico, minúscula, mayúscula y un mínimo de 8 caracteres";
    }
});

confirma_contra.addEventListener("input", (e) => {
    const original = contraseña.value;
    const confirmacion = e.target.value;

    if (confirmacion === original) {
        e.target.classList.add("valido");
        e.target.classList.remove("invalido");
        confirma[0].innerText = "";
    } else {
        e.target.classList.remove("valido");
        e.target.classList.add("invalido");
        confirma[0].innerText = "La contraseña debe coincidir a la anterior";
    }
});

seleccionar.addEventListener("click", (e) => {
    if(e.target.value != "vacio"){
        e.target.classList.add("opc");
    }
});

/*Control de envio*/
const boton = document.getElementById("boton");
const entradas = document.querySelectorAll("input[required]");
const error = document.querySelectorAll(".error");

boton.addEventListener("click", (e) => {
    entradas.forEach(element => {
        if(!element.value){
            e.preventDefault();
            switch(element["id"]){
                case "nombre":
                    error[0].innerText = "*Este campo es requerido";
                case "apellidos":
                    error[1].innerText = "*Este campo es requerido";
                case "email":
                    error[2].innerText = "*Este campo es requerido";
                case "telefono":
                    error[3].innerText = "*Este campo es requerido";
                case "contraseña":
                    error[4].innerText = "*Este campo es requerido";
                case "confirmacion-contraseña":
                    error[5].innerText = "*Este campo es requerido";
            }
        }
    });
});