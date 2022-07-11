FROM node:17.1.0-alpine3.12
ENV NODE_ENV=production
WORKDIR /usr/app
COPY ["package.json","./"]
# RUN cd jnqa-fun
RUN npm install --production --silent && mv node_modules ../
COPY ./jnqa-fun .
EXPOSE 3000
RUN chown -R node /usr/app
USER node
CMD ["npm", "start"]
