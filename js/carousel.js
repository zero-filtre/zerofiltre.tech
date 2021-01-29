let hiddenAboutText = document.querySelector('.about-description span:first-of-type');
let unFoldButton = document.querySelector('.doUnfold span:first-of-type');
let foldButton = document.querySelector('.doUnfold span:nth-of-type(2)');
let unfoldChevron = document.querySelector('.doUnfold img');

const folder = document.getElementById('doUnfold');

if (folder) {
    folder.addEventListener('click', e => {
        hiddenAboutText.classList.toggle('unfold');
        foldButton.classList.toggle('unfold');
        unFoldButton.classList.toggle('unfold');
        unfoldChevron.classList.toggle('up');
    });
}

const backToTopBtn = document.getElementById("back-to-top");
window.onscroll = () => {
    if (backToTopBtn) {
        scrollFunction();
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

backToTopBtn.onclick = backToTop

const nav = document.getElementById("nav");

document.getElementById("menu").addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});

document.getElementById("exit").addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});


function openNav() {
    document.getElementById("mySidebar").style.width = "80%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}