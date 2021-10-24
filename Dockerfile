FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .
CMD ["yarn", "start"]