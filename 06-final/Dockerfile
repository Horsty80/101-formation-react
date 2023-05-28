FROM node:14 AS development

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i --frozen-lockfile
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "pnpm", "start" ]