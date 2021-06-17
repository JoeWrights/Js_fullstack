FROM node:10.13-alpine
RUN mkdir -p /usr/src/app/node-demo
WORKDIR /usr/src/app/node-demo
RUN npm install
COPY . /usr/src/app/node-demo
EXPOSE 3006
ENTRYPOINT ["npm", "run"]
CMD ["start"]