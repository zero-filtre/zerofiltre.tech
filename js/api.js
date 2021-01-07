import { initialContent, dbContent, toolsContent, lifecycleContent } from './tech.js'

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
                <img src="./images/graphql-icon.svg" class="img-fluid" alt="graphql-icon">
              </div>
              <div>
                <h4>Graphql-java</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/spring-boot-icon.svg" class="img-fluid spring-boot-icon" alt="">
              </div>
              <div>
                <h4>Spring-boot</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/springio-icon.svg" class="img-fluid springio-icon" alt="spring-mvc">
              </div>
              <div>
                <h4>Spring Web MVC</h4>
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/springio-icon.svg" class="img-fluid springio-icon" alt="spring-security">
              </div>
              <div>
                <h4>Spring Security</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/springio-icon.svg" class="img-fluid springio-icon" alt="springio-icon">
              </div>
              <div>
                <h4>Spring AOP</h4>
              </div>
            </div>`;

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
                <img src="./images/maven-icon.svg" class="img-fluid" alt="maven">
              </div>
              <div>
                <h4>Maven</h4>
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/sonar-icon.svg" class="img-fluid sonarcube-icon" alt="sonar">
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
            </div>
            
            <div class="tech-item">
              <div>
                <img src="./images/space-cloud-icon" class="img-fluid" alt="space-cloud">
              </div>
              <div>
                <h4>Space Cloud de SpaceUp Tech</h4>
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