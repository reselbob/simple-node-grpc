FROM node:10.13.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY server.js /app
COPY proto/ /app/proto/
EXPOSE 9099
CMD  ["node", "server.js"]