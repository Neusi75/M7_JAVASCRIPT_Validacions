const formLog = document.getElementById("myForm2");


function loginValidate(){

    var error = 0;
    
    formLog.classList.remove("is-invalid");

    var inputEmail = document.forms["myForm2"]["email"];
    var inputPass = document.forms["myForm2"]["pswd"];
    //var inputCheck = document.forms ["myForm2"]["remember"];

        //Condicions Email
        if (inputEmail.value == "") {
            inputEmail.classList.add("is-invalid");
            document.getElementById("errorEmail3").textContent="* Campo requerido";
            error ++;
        } else if (!validarEmail(inputEmail.value)){
            inputEmail.classList.add("is-invalid");
            document.getElementById("errorEmail3").textContent="Email erroneo";
            error ++;
        } 

        //Condicions password
        if(inputPass.value==""){
            inputPass.classList.add("is-invalid");
            document.getElementById("errorPass3").textContent="* Campo requerido";
            error ++;
        }else if (!validarPassword(inputPass.value)){
            inputPass.classList.add("is-invalid");
            document.getElementById("errorPass").textContent="* La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número";
            error ++;
        }

       

        //Errors
        if (error > 0){
            return false;
        }else{
            return true;
        }

}

formLog.addEventListener("blur", (event) => {
    console.log(event);
    if(event.target.value!="") event.target.classList.remove("is-invalid");
    
}, true);

function validarEmail(email) {
    var expEmail = /\w+@\w+\.+[a-z]/;
    return expEmail.test(email) ? true : false;
}

