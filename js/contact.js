const name = document.getElementById('user_name');
const email = document.getElementById('user_email');
const comment = document.getElementById('message');
const subject = document.getElementById('subject');

const notificationErrorEl = document.getElementById('notification-error');
const notificationSuccessEl = document.getElementById('notification-success');
const notificationSendErrorEl = document.getElementById(
	'notification-send-error',
);

function validateForm(form) {
	loaderEl = document.getElementById('loader');
	loaderEl.classList.remove('hide');

	if (checkInputs(name, email, comment)) {
		const data = { subject: subject.value, replyTo: email.value, message: comment.value }

		sendMessage(data)
			.then(data => {
				if (data.ok) {
					loaderEl.classList.add('hide');
					notificationSuccessEl.classList.add('success');
					resetForm();
				}else {
					throw new Error("Une s'est produite !")
				}
			}).catch(err => {
				console.error(err);
				loaderEl.classList.add('hide');
				notificationSendErrorEl.classList.add('send_error');
			})
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

	const errorMessages = document.querySelectorAll('small');
	errorMessages.forEach(small => (small.innerText = ''));

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

function sendMessage({ subject, replyTo, message }) {
	const apiUrl = 'https://blog-api-dev.zerofiltre.tech/notification/help'
	return fetch(`${apiUrl}?subject=${subject}&replyTo=${replyTo}&message=${message}`, { method: "POST" })
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
