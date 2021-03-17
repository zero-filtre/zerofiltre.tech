function validateForm() {
    let isOk = true;

    let userNameEl = document.getElementById('user_name');
    let userEmailEl = document.getElementById('user_email');
    let subjectEl = document.getElementById('subject');
    let messageEl = document.getElementById('message');
    let buttonEl = document.getElementById('message');
    let notificationErrorEl = document.getElementById('notification-error');
    let notificationSuccessEl = document.getElementById('notification-success');
    let notificationSendErrorEl = document.getElementById('notification-send-error');

    var userName = document.forms["contact-form"]["user_name"].value;
    var userEmail = document.forms["contact-form"]["user_email"].value;
    var subject = document.forms["contact-form"]["subject"].value;
    var message = document.forms["contact-form"]["message"].value;

    if (isEmpty(userName)) {
        userNameEl.classList.toggle('input_error');
        isOk = false;
    }

    if (isEmpty(userEmail) || isNotEmail(userEmail)) {
        userEmailEl.classList.toggle('input_error');
        isOk = false;
    }

    if (isEmpty(subject)) {
        subjectEl.classList.toggle('input_error');
        isOk = false;
    }

    if (isEmpty(message)) {
        messageEl.classList.toggle('input_error');
        isOk = false;
    }

    if (!isOk) {
        notificationErrorEl.classList.toggle('error');
    } else {
        emailjs.sendForm('gmail_service_5i44y6w', 'zerofiltre_contact_templ', this)
            .then(function () {
                notificationSuccessEl.classList.toggle('send_error');
            }, function (error) {
                notificationSendErrorEl.toggleAttribute('success');
            });
    }
}

function isEmpty(value) {
    if (value == null || typeof value == 'undefined') return true;
    return (value.length <= 0);
}

function isNotEmail(email) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !RegExp.test(String(email).toLowerCase());
}

(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_tFkOmcuOARzIdLDcr19vF');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        validateForm();
    });
}