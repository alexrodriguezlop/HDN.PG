# Versión LTS
FROM alpine:3.12.1

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"

# Instalar node y npm
RUN apk update && apk upgrade
RUN apk add --update nodejs nodejs-npm

# Crear un usuario del sistema sin home ni contraseña
RUN adduser -HD user

# Adaptamos el entorno para trabajar con user
RUN mkdir -p /test
RUN chown -R user:user /test

WORKDIR /test

# Copiamos los paquetes JSON
COPY package*.json ./

# Instalación de dependencias
RUN npm install --no-optional  && npm update && npm cache clean --force


# Definir la variable PATH a bin
ENV PATH=/test/node_modules/.bin:$PATH


# Limpiar
RUN rm package*.json && rm -rf /var/lib/apt/lists/*

USER user

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]