let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


function validateName() {
    let name = document.getElementById("name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }

    nameError.innerHTML = "Valid";
    return true;
}

function validatephone() {
    let phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is Required";
        return false;
    }
    if (phone.length == !10) {
        phoneError.innerHTML = "Phone no should be 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone no should be only digit";
        return false;
    }

    phoneError.innerHTML = "Valid";
    return true;
}

function validateemail() {
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = "Valid";
    return true;
}

function validatemessage() {
    let message = document.getElementById("message").value;

    let required = 30;
    let left = required - message.length;
    if (left > 0) {
        messageError.innerHTML =  left + "More Character is Required";
        return false;
    }


    messageError.innerHTML = "Valid";
    return true;
}


function validateForm() {
    if (!validateName() || !validatephone() || !validatemessage() || !validateemail()) {
        submitError.style.display="block";
        submitError.innerHTML="Please fix error to Submit";

        setTimeout(() => {
            submitError.style.display="none";
        }, 3000);
        return false;
    }
    
}