# Use the official Node.js image as a base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Cloud Run expects (this should be dynamic)
EXPOSE 8080

ENV PORT 3000

# Log the port to verify it's correct
RUN echo "Running Next.js on port $PORT"

# Command to run the app (make sure it starts and listens on PORT)
CMD ["npm", "start"]