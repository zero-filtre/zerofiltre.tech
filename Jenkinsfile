def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, containers: [
        containerTemplate(name: 'docker', image: 'docker', command: 'cat', ttyEnabled: true),
        containerTemplate(name: 'kubectl', image: 'roffe/kubectl', command: 'cat', ttyEnabled: true)
],
        volumes: [
                hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
        ]) {
    node(label) {
        stage('Checkout') {
            checkout scm
        }

        withEnv(["api_image_tag=imzerofiltre/zerofiltretech:${env.BUILD_NUMBER}",
                 "env_name=${getEnvName(env.BRANCH_NAME)}"

        ]) {
            stage('Build and push API to docker registry') {
                withCredentials([usernamePassword(credentialsId: 'DockerHubCredentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    buildAndPush(USERNAME, PASSWORD)
                }
            }

            stage('Deploy on k8s') {
                runApp()
            }
        }
    }
        }

String getEnvName(String branchName) {
    if ( branchName == 'main' ) {
        return 'prod'
    }
    return (branchName == 'develop') ? 'uat' : 'dev'
}

def buildAndPush(dockerUser, dockerPassword) {
    container('docker') {
        sh """
                docker build -t ${api_image_tag}  --pull --no-cache .
                echo "Image build complete"
                docker login -u $dockerUser -p $dockerPassword
                docker push ${api_image_tag}
                echo "Image push complete"
         """
    }
}

def runApp() {
    container('kubectl') {
        dir('k8s') {
            sh """
                  echo "Branch:" ${env.BRANCH_NAME}
                  echo "env:" ${env_name}
                  kubectl apply -f microservice-${env_name}.yaml
               """
        }
        sh """
                kubectl set image deployment/zerofiltretech-${env_name} zerofiltretech-${env_name}=${api_image_tag} -n zerofiltretech-${env_name}
                if ! kubectl rollout status -w deployment/zerofiltretech-${env_name} -n zerofiltretech-${env_name}; then
                    kubectl rollout undo deployment.v1.apps/zerofiltretech-${env_name} -n zerofiltretech-${env_name}
                    kubectl rollout status deployment/zerofiltretech-${env_name} -n zerofiltretech-${env_name}
                    exit 1
                fi
            """
    }
}
