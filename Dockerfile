FROM node

WORKDIR /usr/app

COPY package.json .
RUN yarn
COPY . .

EXPOSE 4000

CMD ["yarn", "dev"]