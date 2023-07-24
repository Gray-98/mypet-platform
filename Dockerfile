FROM node:16.14.2-alpine

RUN mkdir -p /mypet-platform

WORKDIR /mypet-platform

COPY nextjs-mypet/components /mypet-platform/components
COPY nextjs-mypet/lib /mypet-platform/lib
COPY nextjs-mypet/pages /mypet-platform/pages
COPY nextjs-mypet/styles /mypet-platform/styles
COPY nextjs-mypet/package.json nextjs-mypet/package-lock.json ./

RUN npm install --production

CMD npm run build && npm start
