function validateForm(form) {

    notificationErrorEl = document.getElementById("notification-error");
    notificationSuccessEl = document.getElementById("notification-success");
    notificationSendErrorEl = document.getElementById("notification-send-error");
    loaderEl = document.getElementById("loader");
    loaderEl.classList.remove("hide");

    // let userNameEl = document.getElementById('user_name');
    // let userEmailEl = document.getElementById('user_email');
    // let subjectEl = document.getElementById('subject');
    // let messageEl = document.getElementById('message');
    // let userNameErr = document.getElementById('user_name_error');
    // let userEmailErr = document.getElementById('user_email_error');
    // let subjectErr = document.getElementById('subject_error');
    // let messageErr = document.getElementById('message_error');

    // var userName = document.forms["contact-form"]["user_name"].value;
    // var userEmail = document.forms["contact-form"]["user_email"].value;
    // var subject = document.forms["contact-form"]["subject"].value;
    // var message = document.forms["contact-form"]["message"].value;

    // nameValid = validateValue(userNameEl, userNameErr, userName, false);
    // emailValid = validateValue(userEmailEl, userEmailErr, userEmail, true);
    // subjectValid = validateValue(subjectEl, subjectErr, subject, false);
    // messageValid = validateValue(messageEl, messageErr, message, false);

    // isOk = nameValid && emailValid && subjectValid && messageValid;

    // if (isOk) {
    emailjs.sendForm('gmail_service_5i44y6w', 'zerofiltre_contact_templ', form)
        .then(function () {
            loaderEl.classList.add("hide");
            notificationSuccessEl.classList.add('success');
        }, function (error) {
            loaderEl.classList.add("hide");
            notificationSendErrorEl.classList.add('send_error');
        });
    //  } else {
    //notificationErrorEl.classList.add('error');
    //  }

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

const validateValue = (el, elError, value, isEmail) => {
    validValue = isEmail ? (!isEmpty(value) && !isNotEmail(value)) : !isEmpty(value);
    console.log(validValue);
    if (validValue) {
        el.classList.remove('input_error');
        elError.classList.remove('error');
    } else {
        el.classList.add('input_error');
        elError.classList.add('error');
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

}