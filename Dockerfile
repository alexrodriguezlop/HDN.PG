# Versión LTS
FROM node:lts-stretch-slim

LABEL version="6.0.0" maintainer="alexrodriguezlop@gmail.com"

    RUN apt-get update                              && \ 
    apt-get install -y locales                      && \
    # Directorio de modulos y ficheros
    chown -R node:node /test/                       &&\ 
    mkdir -p /app/node_modules                      && \
    chown -R node:node /app                         && \
    ln -s /app/node_modules /node_modules           && \
    # Permisos npm install sin privilegio
    chown -R node:node /usr/local/lib/node_modules  && \ 
    chown -R node:node /usr/local/share             && \
    chown -R node:node /usr/local/bin               && \
    # Limpieza
    apt-get clean                                   && \
    rm -rf /var/lib/apt/lists/*

USER node

WORKDIR /app

# Instalar dependencias
RUN npm install -g gulp-cli   && \
    npm install gulp-shell    && \
    npm install gulp-mocha    && \
    npm install gulp                                    

WORKDIR /test

# Definir la variable PATH a bin
ENV PATH=/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp" ]
#CMD ["/bin/sh"]