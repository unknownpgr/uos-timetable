FROM node:20

# Install playwright
RUN npx playwright install-deps
RUN npx playwright install chromium

WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY src/ src/
ENTRYPOINT ["node", "src/main.js"]