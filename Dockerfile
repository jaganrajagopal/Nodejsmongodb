# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]

# Install any needed packages
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV MONGO_DB_URI=mongodb://mongo:27017/bookstore

# Run app when the container launches
CMD ["node", "app.js"]
#CMD ["npm", "start"]
