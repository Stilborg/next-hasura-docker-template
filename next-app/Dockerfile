FROM node:15

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node

COPY --chown=node:node ./package.json .
ENV PATH /home/node/node_modules/.bin:$PATH
RUN npm install --unsafe-perm

WORKDIR /home/node/app
COPY --chown=node:node . .
CMD npm run dev
# ENV PORT=80
# EXPOSE 80
EXPOSE 3000