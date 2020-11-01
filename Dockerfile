# Versión LTS
FROM node:lts-stretch-slim

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"

WORKDIR /test 

RUN apt-get update                                  && \ 
    apt-get install -y locales                      && \
    chown -R node:node /test/                       && \
    chown -R node:node /usr/local/lib/node_modules  && \ 
    chown -R node:node /usr/local/share             && \
    chown -R node:node /usr/local/bin               && \
    apt-get clean                                   && \
    rm -rf /var/lib/apt/lists/*                  

USER node

# Copiamos los paquetes JSON
COPY package*.json ./

# Instalar dependencias
# Limpiar
RUN npm install -g gulp-cli                                 && \
    npm install --no-optional --no-install-recommends       && \ 
    npm update                                              && \ 
    npm cache clean --force                                 && \ 
    rm /test/package*.json

# Definir la variable PATH a bin
ENV PATH=/test/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]