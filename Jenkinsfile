pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/ShakyaRupasinghe4168/4168-Rupasinghe'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t shakyaru/app-4168:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
              withCredentials([string(credentialsId: 'shaki', variable: 'shaki')])
               bat'docker login -u shakyaru -p ${shaki}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push shakyaru/app-4168:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}