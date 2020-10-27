let index = 0;
let list = document.querySelectorAll('.reviews-carousel .card');
let hiddenAboutText = document.querySelector('.about-description span:first-of-type');
let unFoldButton = document.querySelector('.doUnfold span:first-of-type');
let foldButton = document.querySelector('.doUnfold span:nth-of-type(2)');
let unfoldChevron = document.querySelector('.doUnfold img');
let count = list.length;
let stop = false;

function push(slideList) {
    /*   slideList[index].classList.remove('visible');
      slideList[index].classList.add('invisible');
      slideList[index++].classList.add('visible');
      slideList[index].classList.remove('invisible');
      if (index >= count){
          index = 0;
      } */
}



var folder = document.getElementById('doUnfold');
folder.addEventListener('click',e => {
    hiddenAboutText.classList.toggle('unfold');
    foldButton.classList.toggle('unfold');
    unFoldButton.classList.toggle('unfold');
    unfoldChevron.classList.toggle('up');

});

var slide = setInterval(() => {
    if (!stop) {
        console.log("Start");
        list[index].classList.toggle('invisible');
        index++;
        if (index + 1 > count) {
            index = 0;
        }
        list[index].classList.toggle('invisible');
    }

}, 10000);

list.forEach(el => {
    //stop slide show on hover but restart after 20s
    el.addEventListener('mouseover', function (e) {
        console.log("Stop");
        stop = true;
        
        setTimeout(() => {
            console.log("Restart");
            stop = false;
        }, 15000);


    });
});

/* let slide = visible => {
    if (visible){
        console.log(visible);
        setInterval(push(list),3000)
    }
}

const thresholdArray = steps => Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0)

let previousY = 0
let previousRatio = 0

const handleIntersect = entries => {
    entries.forEach(entry => {
        const currentY = entry.boundingClientRect.y
        const currentRatio = entry.intersectionRatio
        const isIntersecting = entry.isIntersecting

        // Scrolling down/up
        if (currentY < previousY) {
            if (currentRatio > previousRatio && isIntersecting) {
                console.log("Scrolling down enter");
                isVisible = true;
            } else {
                isVisible = false;
                console.log("Scrolling down leave");
            }
        } else if (currentY > previousY && isIntersecting) {
            if (currentRatio < previousRatio) {
                console.log("Scrolling up leave");
                isVisible = false;
            } else {
                isVisible = true;
                console.log("Scrolling up enter");
            }
        }

        previousY = currentY
        previousRatio = currentRatio
        slide(isVisible);
    })
}

const observer = new IntersectionObserver(handleIntersect, {
    threshold: thresholdArray(1.0),
})

observer.observe(list[0]); */