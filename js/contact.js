const name = document.getElementById('user_name');
const email = document.getElementById('user_email');
const comment = document.getElementById('message');
const subject = document.getElementById('subject');

function validateForm(form) {
	notificationErrorEl = document.getElementById('notification-error');
	notificationSuccessEl = document.getElementById('notification-success');
	notificationSendErrorEl = document.getElementById(
		'notification-send-error',
	);
	loaderEl = document.getElementById('loader');

	loaderEl.classList.remove('hide');

	if (checkInputs(name, email, comment)) {
		emailjs
			.sendForm('gmail_service_5i44y6w', 'zerofiltre_contact_templ', form)
			.then(
				function () {
					loaderEl.classList.add('hide');
					notificationSuccessEl.classList.add('success');
					resetForm();
				},
				function (error) {
					loaderEl.classList.add('hide');
					notificationSendErrorEl.classList.add('send_error');
				},
			);
	} else {
		setTimeout(() => {
			notificationErrorEl.classList.add('error');
			loaderEl.classList.add('hide');
		}, 2500);
	}

	setTimeout(() => {
		notificationSendErrorEl.classList.remove('send_error');
		notificationErrorEl.classList.remove('error');
		notificationSuccessEl.classList.remove('success');
	}, 15000);
}

//helper functions
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-group success';
}

function isEmail(email) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email,
	);
}

function checkInputs(name, email, comment) {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const commentValue = comment.value.trim();

	setTimeout(() => {
		if (nameValue === '') {
			setErrorFor(name, 'Ce champs est obligatoire');
		} else {
			setSuccessFor(name);
		}

		if (emailValue === '') {
			setErrorFor(email, 'Ce champs est obligatoire');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Cette adresse email est invalide');
		} else {
			setSuccessFor(email);
		}

		if (commentValue === '') {
			setErrorFor(comment, 'Ce champs est obligatoire');
		} else {
			setSuccessFor(comment);
		}
	}, 2500);

	if (nameValue !== '' && commentValue !== '' && isEmail(emailValue)) {
		return true;
	}

	return false;
}

function resetForm() {
	name.value = '';
	email.value = '';
	comment.value = '';
	subject.value = '';
}

//key down listener functions
name.onkeyup = () => {
	const nameVal = name.value.trim();
	if (nameVal !== '') {
		setSuccessFor(name);
	}
};

email.onkeyup = () => {
	const emailVal = email.value.trim();
	if (isEmail(emailVal) || emailVal !== '') {
		setSuccessFor(email);
	}
};

comment.onkeyup = () => {
	const commentVal = comment.value.trim();
	if (commentVal !== '') {
		setSuccessFor(comment);
	}
};

//email Js setup
(function () {
	emailjs.init('user_tFkOmcuOARzIdLDcr19vF');
})();

//Form submit function
window.onload = function () {
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (event) {
			event.preventDefault();

			validateForm(this);
		});
};
