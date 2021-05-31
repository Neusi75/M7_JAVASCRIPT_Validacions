/*document.getElementById("botoRegistre").addEventListener("click", function (event) {
	event.preventDefault();
});*/

const formReg = document.getElementById("myForm");

function registerValidate() {



    var errors = 0;

    formReg.classList.remove("is-invalid");

    var inputUser = document.forms["myForm"]["inputUser"];
    var inputEmail = document.forms["myForm"]["inputEmail"];
    var inputPass = document.forms["myForm"]["inputPass"];
    var inputPass2 = document.forms["myForm"]["inputPass2"];
    var inputProvincia = document.forms["myForm"]["inputProvincia"];

    //Condicions Email
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent="* Campo requerido";
        errors ++;
    } else if (!validarEmail(inputEmail.value)){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent="Email erroneo";
        errors ++;
    } 

    //Condicions User
    if(inputUser.value == ""){
        inputUser.classList.add("is-invalid");
        document.getElementById("errorUser").textContent="* Campo requerido";
        errors ++;
    }

    //Condicions provincia
    if(inputProvincia.value == ""){
        inputProvincia.classList.add("is-invalid");
        document.getElementById("errorProvincia").textContent="* Campo requerido";
        errors ++;
    }
    
    //Condicions password
    if(inputPass.value==""){
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPass").textContent="* Campo requerido";
        errors ++;
    }else if (!validarPassword(inputPass.value)){
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPass").textContent="* La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número";
        errors ++;
    }

    //Condicions password
    if(inputPass2.value==""){
        inputPass2.classList.add("is-invalid");
        document.getElementById("errorPass2").textContent="* Campo requerido";
        errors ++;
    }else if (inputPass2.value != inputPass.value){
        inputPass2.classList.add("is-invalid");
        document.getElementById("errorPass2").textContent="* Las contraseñas no coinciden";
        errors ++;
    }

    if (errors > 0){
        return false;
    }else{
        return true;
    }
} 
    
    formReg.addEventListener("blur", (event) => {
        console.log(event);
        if(event.target.value!="") event.target.classList.remove("is-invalid");
        
    }, true);

    function validarEmail(email) {
        var expEmail = /\w+@\w+\.+[a-z]/;
        return expEmail.test(email) ? true : false;
    }

    function validarPassword (password){
        var expPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return expPass.test(password) ? true : false;
    }