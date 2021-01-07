import { initialContent, toolsContent, lifecycleContent } from './tech.js'

// initialContent.innerHTML = `
//             <div class="tech-item">
//               <div>
//                   <img src="./images/javascript-icon.svg" class="img-fluid" alt="">
//               </div>
//               <div>
//                   <h4>Javascript</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//               <div>
//                   <img src="./images/angular-icon.svg" class="img-fluid" alt="">
//               </div>
//               <div>
//                   <h4>Angular</h4>
//               </div>
//             </div>`;

// toolsContent.innerHTML = `
//             <div class="tech-item">
//                <div>
//                 <img src="./images/docker-icon.svg" class="img-fluid" alt="docker">
//               </div>
//               <div>
//                 <h4>Docker</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//                <div>
//                 <img src="./images/kubernetes-icon.svg" class="img-fluid kubernetes-icon" alt="kubernetees">
//               </div>
//               <div>
//                 <h4>Kubernetes</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//               <div>
//                 <img src="./images/jenkins-icon.svg" class="img-fluid" alt="jenkins">
//               </div>
//               <div>
//                 <h4>Jenkins</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//                <div>
//                 <img src="./images/gitlab-icon.svg" class="img-fluid" alt="gitlab-ci">
//               </div>
//               <div>
//                 <h4>Gitlab-ci</h4>
//               </div>
//             </div>`;

// lifecycleContent.innerHTML = `
//             <div class="tech-item">
//               <div>
//                 <img src="./images/git-icon.svg" class="img-fluid git-icon" alt="git">
//               </div>
//               <div>
//                 <h4>Git</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//              <div>
//                 <img src="/images/github-icon.svg" class="img-fluid github-icon" alt="github">
//               </div>
//               <div>
//                 <h4>Github</h4>
//               </div>
//             </div>

//             <div class="tech-item">
//               <div>
//                 <img src="/images/gitlab-icon.svg" class="img-fluid" alt="gitlab">
//               </div>
//               <div>
//                 <h4>Gitlab</h4>
//               </div>
//             </div>`;


initialContent.innerHTML = `
            <div class="tech-item">
              <div>
                  <img src="./images/javascript-icon.svg" class="img-fluid" alt="">
              </div>
          
            </div>

            <div class="tech-item">
              <div>
                  <img src="./images/angular-icon.svg" class="img-fluid" alt="">
              </div>
    
            </div>`;

toolsContent.innerHTML = `
            <div class="tech-item">
               <div>
                <img src="./images/docker-icon.svg" class="img-fluid" alt="docker">
              </div>
            </div>

            <div class="tech-item">
               <div>
                <img src="./images/kubernetes-icon.svg" class="img-fluid kubernetes-icon" alt="kubernetees">
              </div>
      
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/jenkins-icon.svg" class="img-fluid" alt="jenkins">
              </div>

            </div>

            <div class="tech-item">
               <div>
                <img src="./images/gitlab-icon.svg" class="img-fluid" alt="gitlab-ci">
              </div>
    
            </div>`;

lifecycleContent.innerHTML = `
            <div class="tech-item">
              <div>
                <img src="./images/git-icon.svg" class="img-fluid git-icon" alt="git">
              </div>
            </div>

            <div class="tech-item">
             <div>
                <img src="./images/github-icon.svg" class="img-fluid github-icon" alt="github">
              </div>
            </div>

            <div class="tech-item">
              <div>
                <img src="./images/gitlab-icon.svg" class="img-fluid" alt="gitlab">
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