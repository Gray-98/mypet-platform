pipeline {
  agent any

  environment {
    IMAGE_API_NAME = "mypet_platform:latest"
  }

  stages {
    stage("Build Platform") {
      steps {
          sh """
            docker image rm -f $IMAGE_API_NAME
            docker build -t $IMAGE_API_NAME -f ./Dockerfile .
          """
      }
    }

    stage("Deploy") {
      steps {
          sh """
            docker stop mypet-platform
            docker rm -f mypet-platform
            docker run -d -p 3000:3000 --name mypet-platform $IMAGE_API_NAME
          """
      }
    }
  }
}