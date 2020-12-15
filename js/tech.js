const techsBlock = document.querySelector('.our-techs')
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
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Java</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-boot</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-data</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Hibernate</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-Cloud</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Kafka</h4>
              </div>
            </div>`

dbContent.innerHTML = `
            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>MongoDB</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>MySQL</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </div>`

toolsContent.innerHTML = `
            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Maven</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Sonar</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Docker</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Jenins</h4>
              </div>
            </div>

            <div class="card tech-item">
               <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Gitlab-ci</h4>
              </div>
            </div>`

lifecycleContent.innerHTML = `
            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Git</h4>
              </div>
            </div>

            <div class="card tech-item">
             <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Github</h4>
              </div>
            </div>

            <div class="card tech-item">
              <div>
                <img src="//unsplash.it/50/50" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Gitlab</h4>
              </div>
            </div>`



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



$('.owl-carousel').owlCarousel({
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  margin: 5,
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
      items: 4
    }
  }
})


/*const readMoreBtn = document.querySelector('.voir-plus')
const hidedText = document.querySelectorAll('.unfold')
const serviceText = document.querySelector('.text-fold')

const text = document.createElement('div')
text.className = 'wrap_text'

text.innerHTML = `<p class="our-service__description">Zerofiltre a pour objectif de vous accompagner,
              particuliers, moyennes
              et petites entreprises dans ce processus, en vous
              fournissant des applications en JAVA, compatibles pour toutes plateformes, qui pourront évoluer avec la
              taille de votre
              entreprise, avec un rapport qualité/prix toujours meilleur.</p>
            <p class="our-service__description">Nous nous améliorons en continu afin de fournir aux clients
              mieux qu'ils
              ne le souhaitent. Cependant, Le langage JAVA
              utilise une méthodologie assez bien élaborée qui nécessite des années d’expériences et c’est exactement ce
              dont nous
              disposons.
            </p>`
            

readMoreBtn.addEventListener('click', function () {

  if (text.classList.contains('wrap_text')) {
    text.classList.remove('wrap_text')
    text.classList.add('expand_text')
    serviceText.appendChild(text)
    readMoreBtn.innerText = 'Voir moins'
  }
  else {
    text.classList.remove('expand_text')
    text.classList.add('wrap_text')
    serviceText.removeChild(text)
    readMoreBtn.innerText = 'Voir plus'
  }

})
*/
