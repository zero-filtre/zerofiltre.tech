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
