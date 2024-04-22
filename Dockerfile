
FROM node:latest  

# Set the working directory inside the container
WORKDIR /usr/src/app  

# Copy the contents of the 4168_APP directory from the host machine to the /usr/src/app directory inside the container
COPY app-4168/* /  

RUN npm install  

# Expose port 3000 to allow external access to the Node.js application
EXPOSE 3000  

# Define the command to start the Node.js application
CMD [ "npm", "start" ]  
