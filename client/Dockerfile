FROM node:10.13.0-alpine
WORKDIR /app
COPY css/ css/
COPY js/ js/
COPY proto/ proto/

COPY index.html /app/
COPY main.js /app/
COPY server.js /app/
COPY package* /app/

RUN npm install
EXPOSE 8081
CMD  ["node", "server.js"]