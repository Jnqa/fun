FROM node:17.1.0-alpine3.12
ENV NODE_ENV=production
WORKDIR /usr/src
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src
USER node
CMD ["npm", "start"]
