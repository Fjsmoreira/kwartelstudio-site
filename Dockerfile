# Single-stage build: Astro compiles, nginx serves. No COPY --from, so
# Coolify's build-cache layering never goes stale between deploys.
FROM node:22-alpine
RUN apk add --no-cache nginx
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build \
  && mkdir -p /usr/share/nginx/html \
  && cp -r /app/dist/* /usr/share/nginx/html/ \
  && rm -rf /app/dist /app/src /app/node_modules
COPY nginx.conf /etc/nginx/http.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
