FROM node:15

WORKDIR /usr/src/

COPY ./package.json .
ENV PATH /usr/src/node_modules/.bin:$PATH
RUN npm install

WORKDIR /usr/src/app
COPY . .
CMD npm run dev
# ENV PORT=80
# EXPOSE 80
EXPOSE 3000