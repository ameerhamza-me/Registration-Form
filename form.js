
let form = document.getElementById("myForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let address = document.getElementById("address");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let ageError = document.getElementById("ageError");
let phoneError = document.getElementById("phoneError");
let addressError = document.getElementById("addressError");

let isSubmitted = false;

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.style.borderColor = "red";
}

function showSuccess(input, errorElement) {
    errorElement.textContent = "";
    input.style.borderColor = "green";
}

function validateName() {
    if (name.value.trim() === "") {
        showError(name, nameError, "Name is required!");
        return false;
    }

    showSuccess(name, nameError);
    return true;
}

function validateEmail() {
    let value = email.value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        showError(email, emailError, "Email is required!");
        return false;
    }

    if (!pattern.test(value)) {
        showError(email, emailError, "Enter a valid email!");
        return false;
    }

    showSuccess(email, emailError);
    return true;
}

function validatePassword() {
    if (password.value === "") {
        showError(password, passwordError, "Password is required!");
        return false;
    }

    if (password.value.length < 8) {
        showError(
            password,
            passwordError,
            "Password must be at least 8 characters!"
        );
        return false;
    }

    showSuccess(password, passwordError);
    return true;
}

function validateAge() {
    let value = age.value.trim();
    let number = Number(value);

    if (value === "") {
        showError(age, ageError, "Age is required!");
        return false;
    }

    if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 120
    ) {
        showError(age, ageError, "Enter an age between 1 and 120!");
        return false;
    }

    showSuccess(age, ageError);
    return true;
}

function validatePhone() {
    let value = phone.value.trim();
    let pattern = /^\+?\d{10,15}$/;

    if (value === "") {
        showError(phone, phoneError, "Phone number is required!");
        return false;
    }

    if (!pattern.test(value)) {
        showError(
            phone,
            phoneError,
            "Enter 10 to 15 digits. Optional + at the start."
        );
        return false;
    }

    showSuccess(phone, phoneError);
    return true;
}

function validateAddress() {
    if (address.value.trim() === "") {
        showError(address, addressError, "Address is required!");
        return false;
    }

    showSuccess(address, addressError);
    return true;
}


name.addEventListener("input", function() {
    if (isSubmitted || name.value.trim() !== "") {
        validateName();
    }
});

email.addEventListener("input", function() {
    if (isSubmitted || email.value.trim() !== "") {
        validateEmail();
    }
});

password.addEventListener("input", function() {
    if (isSubmitted || password.value !== "") {
        validatePassword();
    }
});

age.addEventListener("input", function() {
    if (isSubmitted || age.value.trim() !== "") {
        validateAge();
    }
});

phone.addEventListener("input", function() {
    if (isSubmitted || phone.value.trim() !== "") {
        validatePhone();
    }
});

address.addEventListener("input", function() {
    if (isSubmitted || address.value.trim() !== "") {
        validateAddress();
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    isSubmitted = true;

    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateAge()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateAddress()) isValid = false;

    if (isValid) {
        alert("Registration successful!");

        console.log("Form submitted successfully!");

        form.reset();

        let inputs = [
            name,
            email,
            password,
            age,
            phone,
            address
        ];

        inputs.forEach(function(input) {
            input.style.borderColor = "";
        });

        let errors = [
            nameError,
            emailError,
            passwordError,
            ageError,
            phoneError,
            addressError
        ];

        errors.forEach(function(error) {
            error.textContent = "";
        });

        isSubmitted = false;
    }
});
