# Use node:18.16.0-alpine as the base image
FROM node:18.16.0-alpine as base

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./
COPY .env ./

# Install dependencies
RUN npm install

# Copy the necessary files
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Generate the Prisma client
RUN npx prisma generate

# Expose port 3000
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]
