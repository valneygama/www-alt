FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
# install packages
RUN npm install
RUN npm ci --only=production
# copying project files
COPY . .
# web server run in port 80
EXPOSE 80
CMD [ "node", "index.js" ]
