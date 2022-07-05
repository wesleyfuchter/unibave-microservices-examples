FROM node

ADD package.json package.json
ADD package-lock.json package-lock.json
ADD index.js index.js

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]


