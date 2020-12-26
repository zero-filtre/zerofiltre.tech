const techsBlock = document.querySelector(".our-techs");
const tabLinks = document.querySelectorAll(".tablink");

const codelink = document.querySelector(".codeLink");
const dblink = document.querySelector(".dbLink");
const toolsLink = document.querySelector(".toolsLink");
const lifeCycleLink = document.querySelector(".lifeCycleLink");

const initialContent = document.createElement("div");
initialContent.className = "technos";
initialContent.classList.add("code");

const dbContent = document.createElement("div");
dbContent.className = "technos";
dbContent.classList.add("databases");

const toolsContent = document.createElement("div");
toolsContent.className = "technos";
toolsContent.classList.add("tools");

const lifecycleContent = document.createElement("div");
lifecycleContent.className = "technos";
lifecycleContent.classList.add("lifeCycle");

initialContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/java-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Java</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/spring-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/spring-boot-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-boot</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/spring-data-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-data</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/hibernate-icon.svg" class="img-fluid hibernate" alt="">
              </div>
              <div>
                <h4>Hibernate</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/spring-cloud-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Spring-Cloud</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/kafka-icon.svg" class="img-fluid" alt="">
              </div>
              <div>
                <h4>Kafka</h4>
              </div>
            </div>`;

dbContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/mongodb-icon.svg" class="img-fluid" alt="mongodb">
              </div>
              <div>
                <h4>MongoDB</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/mysql-icon.svg" class="img-fluid" alt="mysql">
              </div>
              <div>
                <h4>MySQL</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/postgresql-icon.svg" class="img-fluid" alt="postgresql">
              </div>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </div>`;

toolsContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/maven-icon.svg" class="img-fluid" alt="maven">
              </div>
              <div>
                <h4>Maven</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/sonar-icon.svg" class="img-fluid" alt="sonar">
              </div>
              <div>
                <h4>Sonar</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/docker-icon.svg" class="img-fluid" alt="docker">
              </div>
              <div>
                <h4>Docker</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/kubernetees-icon.svg" class="img-fluid" alt="kubernetees">
              </div>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/jenkins-icon.svg" class="img-fluid" alt="jenkins">
              </div>
              <div>
                <h4>Jenins</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/gitlab-ci-icon.svg" class="img-fluid" alt="gitlab-ci">
              </div>
              <div>
                <h4>Gitlab-ci</h4>
              </div>
            </div>`;

lifecycleContent.innerHTML = `
            <div class="tech-item">
              <div>
                <img src="./images/git-icon.svg" class="img-fluid" alt="git">
              </div>
              <div>
                <h4>Git</h4>
              </div>
            </div>

            <div class="tech-item">
             <div>
                <img src="/images/github-icon.svg" class="img-fluid github" alt="github">
              </div>
              <div>
                <h4>Github</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="/images/gitlab-icon.svg" class="img-fluid" alt="gitlab">
              </div>
              <div>
                <h4>Gitlab</h4>
              </div>
            </div>`;

function addElementToPage(parent, element) {
  parent.appendChild(element);
}

function removeElementFromPage(parent, element) {
  parent.removeChild(element);
}

function clearContent() {
  const currentTab = document.querySelector(".technos");
  if (currentTab) {
    removeElementFromPage(techsBlock, currentTab);
  }
}

function setActiveTabClass(currentLink) {
  tabLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
      currentLink.classList.add("active");
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
})();

codelink.addEventListener("click", () => {
  handleTabClick(codelink, initialContent, techsBlock);
});

dblink.addEventListener("click", () => {
  handleTabClick(dblink, dbContent, techsBlock);
});

toolsLink.addEventListener("click", () => {
  handleTabClick(toolsLink, toolsContent, techsBlock);
});

lifeCycleLink.addEventListener("click", () => {
  handleTabClick(lifeCycleLink, lifecycleContent, techsBlock);
});

$(".owl-carousel").owlCarousel({
  loop: true,
  // center: true,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  margin: 5,
  nav: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3 || 4,
    },
  },
});


const readMoreBtn = document.querySelector(".view-more");
const moreText = document.querySelector(".moreText");
const textBox = document.querySelector(".text-box");
const chevron = document.getElementById("toggleChevron");

readMoreBtn.addEventListener("click", function () {
  if (textBox.classList.contains("wrap-text")) {
    textBox.classList.remove("wrap-text");
    moreText.classList.remove("hide-mobile-text");
    readMoreBtn.innerHTML = `<small>Voir moins</small><img src="/images/dropup-icon.svg" alt="chevron" id="toggleChevron">`;
  } else {
    textBox.classList.add("wrap-text");
    moreText.classList.add("hide-mobile-text");
    readMoreBtn.innerHTML = `<small>Voir plus</small><img src="/images/dropdown-icon.svg" alt="chevron" id="toggleChevron">`;
  }
});
