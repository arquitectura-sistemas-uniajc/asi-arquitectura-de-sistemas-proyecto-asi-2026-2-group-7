
# Etapa 1: dependencias
FROM node:24-alpine AS dependencias

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && mkdir -p node_modules


# Etapa 2: imagen final
FROM node:24-alpine

ENV NODE_ENV=production

WORKDIR /app

# Usuario sin privilegios
RUN addgroup -S app && adduser -S app -G app

# Copiar dependencias de la primera etapa
COPY --from=dependencias --chown=app:app /app/node_modules ./node_modules

# Copiar archivos de EmpleoU
COPY --chown=app:app package*.json ./
COPY --chown=app:app src ./src

USER app

EXPOSE 3000

# Comprobacion de salud
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Iniciar nuestra API
CMD ["node", "src/server.js"]
