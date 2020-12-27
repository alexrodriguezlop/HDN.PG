# Versión LTS
FROM node:lts-stretch-slim

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"

    RUN apt-get update                              && \ 
    apt-get install -y locales                      && \
    # Directorio de modulos y ficheros 
    mkdir -p /app/node_modules                      && \
    chown -R node:node /app                         && \
    ln -s /app/node_modules node_modules            && \
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
# Limpiar
RUN npm install -g gulp-cli                                 && \
    npm install gulp-shell                                  && \
    npm install --no-optional --no-install-recommends       && \
    npm update                                              && \ 
    npm cache clean --force                                 && \ 
    rm ./package*.json

WORKDIR /test

# Definir la variable PATH a bin
ENV PATH=/node_modules/.bin:$PATH

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]