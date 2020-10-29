# Versión LTS
FROM node:lts-stretch-slim

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"


RUN apt-get update && apt-get install -y locales 
    #apk update && \
    #apk upgrade && \



# Copiamos los paquetes JSON
COPY package*.json ./

USER node

# Instalar dependencias
# Limpiar
RUN npm install --no-optional --no-install-recommends && \
    npm update && npm cache clean --force && \
    rm package*.json && rm -rf /var/lib/apt/lists/*

WORKDIR /test

# Definir la variable PATH a bin
ENV PATH=/node_modules/.bin:$PATH



# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]