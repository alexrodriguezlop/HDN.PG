# Versión LTS
FROM node:10-alpine

LABEL version="2.0.1" maintainer="alexrodriguezlop@gmail.com"

# Adaptamos el entorno para trabajar con un usuario nodo.
RUN mkdir -p /home/node/app/node_modules 
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copiamos los paquetes JSON
COPY package*.json ./

# Para que nodo sea propietario de los ficheros generados por npm
USER node

# Instalación de dependencias
RUN npm install

# Ejecutar los comandos siguientes
CMD [ "node", "app.js" ]