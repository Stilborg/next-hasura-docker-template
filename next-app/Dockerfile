FROM node:15

WORKDIR /usr/src
COPY ./package.json .
ENV PATH /usr/src/node_modules/.bin:$PATH
RUN npm install --unsafe-perm

WORKDIR /usr/src/app
COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ] 

