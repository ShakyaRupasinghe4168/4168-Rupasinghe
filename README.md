# EG/2020/4168 - Rupasinghe A.A.H.S
# Application Dockerization Process
This repository contains the necessary steps to Dockerize the application using Jenkins for automation.

## Steps

### 1. Write Dockerfile
Create a Dockerfile in the application's code repository to define the steps required to build the Docker image for the application.

### 2. Manual Dockerization
Manually run the Docker commands to build the Docker image using the Dockerfile and run containers to verify if the Dockerization process works as expected.

### 3. Repository Setup
Put the application code along with the Dockerfile into the GitHub repository.

### 4. Jenkins Integration
Link the GitHub repository to Jenkins by adding the repository URL to Jenkins configuration.

### 5. Pipeline
Write a Jenkins pipeline script to automate the Dockerization process.

### 6. Pipeline Steps
- GitHub Push
- Jenkins Build Trigger
- Docker Image Creation
- Docker Image Push
- Update Status


