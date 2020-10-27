# Versión LTS
FROM alpine:3.12.1

LABEL version="3.0.0" maintainer="alexrodriguezlop@gmail.com"

# Instalar node y npm. 
# Crear un usuario del sistema sin home ni contraseña
# Adapta el entorno para trabajar con user
RUN apk update && \
    apk upgrade && \
    apk add --update nodejs nodejs-npm && \
    adduser -HD user && \
    mkdir -p /test && \
    chown -R user:user /test

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

USER user

# Ejecutar los comandos siguientes
CMD [ "gulp", "test" ]
#CMD ["/bin/sh"]