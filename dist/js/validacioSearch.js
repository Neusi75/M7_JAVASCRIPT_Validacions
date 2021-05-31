const formSearch = document.getElementById("mySearch");


function searchValidate(){

    var error = 0;
    
    formSearch.classList.remove("is-invalid");

    var inputWord = document.forms["mySearch"]["inputSearch"];


    if(inputWord.value.length < 3){
        inputWord.classList.add("is-invalid");
        document.getElementById("errorWord").textContent = "Introduce al menos 3 caracteres";
        error ++;
    }

    if (error > 0){
        return false;
    }else{
        return true;
    }
}