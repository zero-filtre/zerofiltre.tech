function validateForm(form) {
	notificationErrorEl = document.getElementById('notification-error');
	notificationSuccessEl = document.getElementById('notification-success');
	notificationSendErrorEl = document.getElementById(
		'notification-send-error',
	);
	loaderEl = document.getElementById('loader');
	loaderEl.classList.remove('hide');

	emailjs
		.sendForm('gmail_service_5i44y6w', 'zerofiltre_contact_templ', form)
		.then(
			function () {
				loaderEl.classList.add('hide');
				notificationSuccessEl.classList.add('success');
			},
			function (error) {
				loaderEl.classList.add('hide');
				notificationSendErrorEl.classList.add('send_error');
			},
		);

	setTimeout(() => {
		notificationSendErrorEl.classList.remove('send_error');
		notificationErrorEl.classList.remove('error');
		notificationSuccessEl.classList.remove('success');
	}, 5000);
}

function isEmpty(value) {
	if (value == null || typeof value == 'undefined') return true;
	return value.length <= 0;
}

function isNotEmail(email) {
	let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return !mailformat.test(String(email).toLowerCase());
}

const validateValue = (el, elError, value, isEmail) => {
	validValue = isEmail
		? !isEmpty(value) && !isNotEmail(value)
		: !isEmpty(value);
	console.log(validValue);
	if (validValue) {
		el.classList.remove('input_error');
		elError.classList.remove('error');
	} else {
		el.classList.add('input_error');
		elError.classList.add('error');
	}
	return validValue;
};

(function () {
	emailjs.init('user_tFkOmcuOARzIdLDcr19vF');
})();

window.onload = function () {
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (event) {
			event.preventDefault();

			validateForm(this);
		});
};
