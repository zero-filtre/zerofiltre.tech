import { initialContent, dbContent, toolsContent, lifecycleContent } from './tech.js'

initialContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/dart-icon.svg" class="img-fluid" alt="dart">
              </div>
              <div>
                <h4>Dart</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/flutter-icon.svg" class="img-fluid" alt="flutter">
              </div>
              <div>
                <h4>Flutter</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/ionicframework-icon.svg" class="img-fluid" alt="Ionic">
              </div>
              <div>
                <h4>Ionic</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/angular-icon.svg" class="img-fluid" alt="Angular">
              </div>
              <div>
                <h4>Angular</h4>
              </div>
            </div>
            
            `;

dbContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/mongodb-icon.svg" class="img-fluid mongodb-icon" alt="mongodb">
              </div>
              <div>
                <h4>MongoDB</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/mysql-icon.svg" class="img-fluid mysql-icon" alt="mysql">
              </div>
              <div>
                <h4>MySQL</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/postgresql-icon.svg" class="img-fluid postgresql-icon" alt="postgresql">
              </div>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </div>`;

toolsContent.innerHTML = `
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
                <img src="./images/kubernetes-icon.svg" class="img-fluid kubernetes-icon" alt="kubernetees">
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
                <h4>Jenkins</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/gitlab-icon.svg" class="img-fluid" alt="gitlab-ci">
              </div>
              <div>
                <h4>Gitlab-ci</h4>
              </div>
            </div>`;

lifecycleContent.innerHTML = `
            <div class="tech-item">
              <div>
                <img src="./images/git-icon.svg" class="img-fluid git-icon" alt="git">
              </div>
              <div>
                <h4>Git</h4>
              </div>
            </div>

            <div class="tech-item">
             <div>
                <img src="/images/github-icon.svg" class="img-fluid github-icon" alt="github">
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



$(".owl-carousel").owlCarousel({
    loop: true,
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