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
                    def npmCommand = isUnix() ? 'npm' : 'npm.cmd'
                    sh "${npmCommand} install"
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    def npmCommand = isUnix() ? 'npm' : 'npm.cmd'
                    sh "${npmCommand} run cy:run"
                }
            }
        }
    }
}
