FROM node:16.14.2-alpine

RUN mkdir -p /mypet-platform

WORKDIR /mypet-platform

COPY components /mypet-platform/components
COPY lib /mypet-platform/lib
COPY pages /mypet-platform/pages
COPY styles /mypet-platform/styles
COPY package.json package-lock.json ./

RUN npm install --production

CMD npm run build && npm start
