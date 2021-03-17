function validateForm(form) {

    notificationErrorEl = document.getElementById("notification-error");
    notificationSuccessEl = document.getElementById("notification-success");
    notificationSendErrorEl = document.getElementById("notification-send-error");

    let userNameEl = document.getElementById('user_name');
    let userEmailEl = document.getElementById('user_email');
    let subjectEl = document.getElementById('subject');
    let messageEl = document.getElementById('message');

    var userName = document.forms["contact-form"]["user_name"].value;
    var userEmail = document.forms["contact-form"]["user_email"].value;
    var subject = document.forms["contact-form"]["subject"].value;
    var message = document.forms["contact-form"]["message"].value;

    nameValid = validateValue(userNameEl, userName, false);
    emailValid = validateValue(userEmailEl, userEmail, true);
    subjectValid = validateValue(subjectEl, subject, false);
    messageValid = validateValue(messageEl, message, false);

    isOk = nameValid && emailValid && subjectValid && messageValid;

    if (isOk) {
        emailjs.sendForm('gmail_service_5i44y6w', 'zerofiltre_contact_templ', form)
            .then(function () {
                notificationSuccessEl.classList.add('success');
            }, function (error) {
                notificationSendErrorEl.classList.add('send_error');
            });
    } else {
        notificationErrorEl.classList.add('error');
    }

    setTimeout(() => {
        notificationSendErrorEl.classList.remove('send_error');
        notificationErrorEl.classList.remove('error');
        notificationSuccessEl.classList.remove('success');
    }, 5000);
}

function isEmpty(value) {
    if (value == null || typeof value == 'undefined') return true;
    return (value.length <= 0);
}

function isNotEmail(email) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !mailformat.test(String(email).toLowerCase());
}

const validateValue = (el, value, isEmail) => {
    validValue = isEmail ? (!isEmpty(value) && !isNotEmail(value)) : !isEmpty(value);
    console.log(validValue);
    if (validValue) {
        el.classList.remove('input_error');
    } else {
        el.classList.add('input_error');
    }
    return validValue;
}

(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_tFkOmcuOARzIdLDcr19vF');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        validateForm(this);
    });

    inputs = document.querySelectorAll("form input[type=\"text\"],textarea");
    if (inputs) {
        inputs.forEach((el) => {
            el.addEventListener('change', (event) => {
                validateValue(el, event.target.value, el.id == "user_email");
            });

        });
    }

}