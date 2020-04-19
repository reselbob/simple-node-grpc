FROM node:10.13.0-alpine
WORKDIR /app
COPY css app/
COPY js app/
COPY proto app/

COPY index.html /app
COPY main.js /app
COPY server.js /app
COPY package* /app

RUN npm install
EXPOSE 8081
CMD  ["node", "server.js"]