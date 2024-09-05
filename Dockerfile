FROM node:20

# Install playwright
COPY init.sh .
RUN npx playwright install-deps

WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY src/ src/
ENTRYPOINT ["node", "src/main.js"]