# Versión LTS
FROM alpine:3.12.1

LABEL version="2.0.1" maintainer="alexrodriguezlop@gmail.com"

#Instalar node y npm
RUN apk update
RUN apk add --update nodejs nodejs-npm

# Adaptamos el entorno para trabajar con un usuario nodo
RUN mkdir -p /testu
RUN chown -R node:node /test

WORKDIR /test

# Copiamos los paquetes JSON
COPY package*.json ./


# Para que nodo sea propietario de los ficheros generados por npm
USER node

# Instalación de dependencias

RUN npm install --no-optional && npm cache clean --force

ENV PATH /home/node/app/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]