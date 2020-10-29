# Versión LTS
FROM node:lts-stretch-slim

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"


RUN apt-get update && apt-get install -y locales && \
    mkdir \node_modules && chown -R node:node /node_modules

USER node

# Copiamos los paquetes JSON
COPY package*.json ./

# Instalar dependencias
# Limpiar
RUN npm install --no-optional --no-install-recommends && \
    npm update && npm cache clean --force 

USER root

RUN rm package*.json && rm -rf /var/lib/apt/lists/*

USER node

WORKDIR /test

# Definir la variable PATH a bin
ENV PATH=/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]