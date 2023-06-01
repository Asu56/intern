var nameError = document.getElementById('contact-name-error');
// var nameCheck = document.getElementById('contact-name-check');

function validateContactName() {
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required.';
        // nameCheck.innerHTML = '';
        return false;
    }

    nameError.innerHTML = '';
    // nameCheck.innerHTML = '<i class="bi bi-check-circle check"></i>';
    return true;
}

var phoneError = document.getElementById('contact-phone-error');
// var phoneCheck = document.getElementById('contact-phone-check');

function validateContactPhone() {
    var phone = document.getElementById('contact-phone').value.trim();
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required.';
        // phoneCheck.innerHTML = '';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits.';
        // phoneCheck.innerHTML = '';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits are allowed.';
        // phoneCheck.innerHTML = '';
        return false;
    }
    // phoneCheck.innerHTML = '<i class="bi bi-check-circle check"></i>';
    return true;
}

var emailError = document.getElementById('contact-email-error');
// var emailCheck = document.getElementById('contact-email-check');

function validateContactEmail() {
    var emailAddress = document.getElementById('contact-email').value;

    if (emailAddress.length === 0) {
        emailError.innerHTML = 'Email address is required.';
        return false;
    }

    if (!emailAddress.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Invalid email address.';
        return false;
    }

    emailError.innerHTML = '';
    // emailCheck.innerHTML = '<i class="bi bi-check-circle check"></i>';
    return true;
}

var submitError = document.getElementById('submit-button-error');
// var submitCheck = document.getElementById('submit-check');

function validateContactForm() {
    var submitButton = document.querySelector('button[type="submit"]');

    if (!validateContactName() || !validateContactPhone() || !validateContactEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit!';
        submitError.style.color = 'red';
        submitError.style.fontSize = '12px';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);

        // Re-enable the submit button and hide the progress indicator
        submitButton.disabled = false;
        return false;
    }

    // Show the modal

    // Submit the form
}
