let hiddenAboutText = document.querySelector(
  '.about-description span:first-of-type'
);
let unFoldButton = document.querySelector('.doUnfold span:first-of-type');
let foldButton = document.querySelector('.doUnfold span:nth-of-type(2)');
let unfoldChevron = document.querySelector('.doUnfold img');

const folder = document.getElementById('doUnfold');

if (folder) {
  folder.addEventListener('click', (e) => {
    hiddenAboutText.classList.toggle('unfold');
    foldButton.classList.toggle('unfold');
    unFoldButton.classList.toggle('unfold');
    unfoldChevron.classList.toggle('up');
  });
}

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

function openSidebar() {
  document.getElementById('sidebar').style.width = '80%';
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
}

openSidebarBtn.addEventListener('click', openSidebar);

dropdown.addEventListener('click', () => {
  // if (dropdownContent.classList.contains('dropdown-expanded')) {
  //   dropdownContent.classList.remove('dropdown-expanded');
  // } else {
  //   dropdownContent.classList.add('dropdown-expanded');
  // }
  dropdownContent.classList.toggle('dropdown-expanded');
});

// window.addEventListener('mouseup', (event) => {
//   if (event.target != dropdown) {
//     dropdownContent.classList.remove('dropdown-expanded');
//     console.log('outside click');
//   }
// })

let index = 0;
let list = document.querySelectorAll('.reviews-carousel .card');
let count = list.length;
let stop = false;

var slide = setInterval(() => {
  if (!stop) {
    console.log('Start');
    if (list[index]) {
      list[index].classList.toggle('invisible');
      index++;
      if (index + 1 > count) {
        index = 0;
      }
      list[index].classList.toggle('invisible');
    }
  }
}, 10000);

if (list) {
  list.forEach((el) => {
    //stop slide show on hover but restart after 20s
    el.addEventListener('mouseover', function (e) {
      console.log('Stop');
      stop = true;

      setTimeout(() => {
        console.log('Restart');
        stop = false;
      }, 15000);
    });
  });
}
