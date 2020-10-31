# Versión LTS
FROM node:lts-stretch-slim

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"

RUN apt-get update                  && \ 
    apt-get install -y locales      && \
    npm install -g gulp             && \       
    mkdir -p /test                  && \     
    chown -R node:node /test/       && \
    apt-get purge -y --auto-remove  && \
    apt-get clean                   && \
    rm -rf /var/lib/apt/lists/*                  
    
USER node

WORKDIR /test

# Copiamos los paquetes JSON
COPY package*.json ./

# Instalar dependencias
# Limpiar
RUN npm install --no-optional --no-install-recommends       && \ 
    npm update && npm cache clean --force                   && \ 
    rm /test/package*.json

# Definir la variable PATH a bin
ENV PATH=/test/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]