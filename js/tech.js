const techsBlock = document.querySelector('.nos-techs')
const tabLinks = document.querySelectorAll('.tablink');


const codelink = document.querySelector('.codeLink')
const dblink = document.querySelector('.dbLink')
const toolsLink = document.querySelector('.toolsLink')
const lifeCycleLink = document.querySelector('.lifeCycleLink')


const initialContent = document.createElement('div')
initialContent.className = 'technos'
initialContent.classList.add('code')

const dbContent = document.createElement('div')
dbContent.className = 'technos'
dbContent.classList.add('databases')

const toolsContent = document.createElement('div')
toolsContent.className = 'technos'
toolsContent.classList.add('tools')

const lifecycleContent = document.createElement('div')
lifecycleContent.className = 'technos'
lifecycleContent.classList.add('lifeCycle')

initialContent.innerHTML = `
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              <div>Java</div>
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Spring
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Spring-boot
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Spring-data
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Hibernate
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Spring-cloud
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Kafka
            </div>`

dbContent.innerHTML = `
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              MongoDB
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              MySQL
            </div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              PostgreSQL
            </div>`

toolsContent.innerHTML = `
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Maven</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Sonar</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Docker</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Kubernetes</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Jenkins</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Gitlab-ci</div>`

lifecycleContent.innerHTML = `
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Git</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Github</div>
            <div class="card tech-item">
              <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              Gitlab</div>`



function addElementToPage(parent, element) {
  parent.appendChild(element);
}

function removeElementFromPage(parent, element) {
  parent.removeChild(element);
}

function clearContent() {
  const currentTab = document.querySelector('.technos');
  if (currentTab) {
    removeElementFromPage(techsBlock, currentTab);
  }
}

function setActiveTabClass(currentLink) {
  tabLinks.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
      currentLink.classList.add('active');
    }
  });
}

function handleTabClick(link, content, parent) {
  clearContent();
  setActiveTabClass(link);
  addElementToPage(parent, content);
}

(function loadPage() {
  addElementToPage(techsBlock, initialContent);
}());


codelink.addEventListener('click', () => {
  handleTabClick(codelink, initialContent, techsBlock);
});

dblink.addEventListener('click', () => {
  handleTabClick(dblink, dbContent, techsBlock);
});

toolsLink.addEventListener('click', () => {
  handleTabClick(toolsLink, toolsContent, techsBlock);
});

lifeCycleLink.addEventListener('click', () => {
  handleTabClick(lifeCycleLink, lifecycleContent, techsBlock);
});



// $('.loop').owlCarousel({
//   center: true,
//   items: 2,
//   loop: true,
//   margin: 10,
//   responsive: {
//     600: {
//       items: 4
//     }
//   }
// });

$('.owl-carousel').owlCarousel({
  loop: true,
  center: true,
  // autoHeight: true,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
  e.preventDefault();
});