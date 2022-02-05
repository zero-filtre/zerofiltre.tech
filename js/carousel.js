let hiddenAboutText = document.querySelector(
  '.about-description span:first-of-type'
);


const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = () => {
  if (backToTopBtn) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const nav = document.getElementById('nav');
const hamburgerMenu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');
const openSidebarBtn = document.getElementById('openSidebarBtn');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

menu.addEventListener('click', () => {
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
    mobileMenu.style.width = '0';
  } else {
    hamburgerMenu.classList.add('open');
    mobileMenu.style.width = '60%';
  }
});

window.addEventListener('mouseup', (event) => {
  if (event.target != dropdown && event.target != hamburgerMenu) {
    hamburgerMenu.classList.remove('open');
    mobileMenu.style.width = '0';

  }
})


function openSidebar() {
  document.getElementById('sidebar').style.width = '80%';
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
}

openSidebarBtn.addEventListener('click', openSidebar);

dropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('dropdown-expanded');
});

window.addEventListener('mouseup', (event) => {
  if (event.target != dropdown) {
    dropdownContent.classList.remove('dropdown-expanded');
    console.log('outside click');
  }
})

/**
 * Cookie text
 * 
 * on aimerait bien vous accompagner pendant votre visite... 
 * C'est OK pour vous ?
  1: Ok pour moi
  2: Je choisis
 */

// document.addEventListener("DOMContentLoaded", async () => {
//   // const cookieText = document.getElementById('cc-nb-text');
//   // console.log('COOKIE TEXT: ', cookieText);
//   // cookieText.innerText = "Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site.";
//   // cookieText.style.border = '1px solid red';
// });

const loadCookie = () => {
  const cookieText = document.getElementById('cc-nb-text');
  console.log('COOKIE TEXT: ', cookieText);
  cookieText.textContent = "Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site, on aimerait bien vous accompagner pendant votre visite... C'est OK pour vous ?";
  // cookieText.style.border = '1px solid red';
};





