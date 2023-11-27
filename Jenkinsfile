pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat "npm install"
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                   bat "npm run test"
                }
            }
        }
    }
}
