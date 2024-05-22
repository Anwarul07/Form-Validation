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

