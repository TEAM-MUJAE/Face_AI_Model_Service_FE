# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle your app's source code inside the Docker image
COPY . .

# Make port 8081 available to the world outside this container
EXPOSE 8081

# Run the app
# Replace "react-native start" with your command if different
# CMD [ "npm", "run","android" ]
CMD ["npm", "start"]
