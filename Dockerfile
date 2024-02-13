FROM  node:20
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) for both the Vite app and WebSocket server
COPY websocketproxy/package*.json ./websocketproxy/
COPY vite/package*.json ./vite/

# Copy the WebSocket server and Next.js app directories
COPY websocketproxy ./websocketproxy
COPY vite ./vite

# Install dependencies for both applications
RUN cd vite && npm install
RUN cd websocketproxy && npm install

RUN cd vite && npm run build

EXPOSE 3000 8080 5172

# Install pm2 to manage your applications
RUN npm install pm2 -g

# Command to start both the Next.js app and WebSocket server
# At the end of your Dockerfile
CMD pm2 start websocketproxy/server.js && pm2 start vite/server.js --name vite && pm2 logs
