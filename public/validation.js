var get_ID = (x) => document.getElementById(x);
var get_TAG = (x) => document.getElementsByTagName(x);
var set_ID = (x) => document.getElementById(x);
var flag_name = false;
var flag_email = false;
var flag_phone = false;

console.log("ready")
// OK
var inputName = get_ID("name");
var inputEmail = get_ID("email");
var inputPhone = get_ID("phone");

console.log("Running validation")

inputName.addEventListener('blur', () => {
    console.log("name BLUR")
    if (nameValidation(inputName)) {
        flag_name = true;
        return flag_name;
    }
    flag_name = false;
    return flag_name;
});

inputEmail.addEventListener('blur', () => {
    console.log("email BLUR")
    if (emailValidation(inputEmail)) {
        flag_email = true;
        return flag_email;
    }
    flag_email = false;
    return flag_email;
});

inputPhone.addEventListener('blur', () => {
    console.log("phone BLUR")
    if (phoneValidation(inputPhone)) {
        flag_phone = true;
        return flag_phone;
    }
    flag_phone = false;
    return flag_phone;
});


function checkValidations(event) {
    if (flag_author && flag_code && flag_name && flag_qtd) {
        return true
    }
    event.preventDefault();
    alert("Verifique os campos em vermelho!")
    return false;
}


function nameValidation(element) {
    let temp = element
    temp.value = temp.value.replace(/[^a-zA-Z0-9 ]/g, '');
    if (temp.value == "" || !isNaN(temp.value)) {
        temp.style.backgroundColor = 'rgb(246, 195, 195)';
        temp.style.borderColor = 'red';
        return false;
    }
    temp.style.backgroundColor = 'white';
    temp.style.borderColor = 'green';
    return true;
}

const phoneValidation = function (element) {
    let temp = element.value.replace(/[^0-9]/g, '');
    if (Number(temp) <= 0) {
        element.style.backgroundColor = "rgb(246, 195, 195)";
        element.style.borderColor = 'red';
        return false;
    }
    element.value = temp;
    element.style.backgroundColor = "white"
    element.style.borderColor = 'green';
    return true;
}

function emailValidation(element) {
    if (element.checkValidity() && element.value != "") {
        element.style.backgroundColor = "white"
        element.style.borderColor = 'green';
        flag_email = true
        return flag_email
    }
    element.style.backgroundColor = 'rgb(246, 195, 195)';
    element.style.borderColor = 'red';
    flag_email = false
    return flag_email
}

//função para aparecer a div de boasvindas
function formValidation(event) {
    console.log("Form validated")
    if (flag_name && flag_email && flag_phone) {
        resetFlags()
        return true
    }
    event.preventDefault()
    alert("Verifique os campos e tente novamente.")
    
    return false
}

function resetFlags() {
    console.log("Flags reseted")
    flag_name = false
    flag_email = false
    flag_phone = false
}