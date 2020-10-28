# Versión LTS
FROM node:lts-slim
#node:lts-stretch-slim
#node:lts-stretch
#node:lts-buster-slim
#node:lts-buster 
#node:lts-alpine3.12
#alpine:3.12.1

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"


RUN apt-get update && apt-get install -y locales && mkdir -p /test
    #apk update && \
    #apk upgrade && \
    #mkdir -p /test 

WORKDIR /test

# Copiamos los paquetes JSON
COPY package*.json ./

# Instalar dependencias
# Limpiar
RUN npm install --no-optional  && \
    npm update && npm cache clean --force && \
    rm package*.json && rm -rf /var/lib/apt/lists/*

# Definir la variable PATH a bin
ENV PATH=/test/node_modules/.bin:$PATH

USER node

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]