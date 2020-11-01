**Mini Guia de Docker**


---
### Imagen y container

`$ docker images`

---
### Dockerfile


---
### Construir

`$ docker build -t alexrodriguezlop/alpine_v1 .`

### Arrancar
`docker run -it -v 'pwd':/test hdn.pg`

- `it` Terminal interctivo
- `t` Muestra el terminal pero no es interactivo
- `-v 'pwd':/test` Copia el contenido del directorio actual en /test dentro de la maquina.

Nota: Las commilas de `pwd` deben ser comillas a derecha: ```-`-``` 
---
### Eliminar

Eliminar todas las imágenes: 
`docker image rm -f $(docker image ls -aq)`


## Dockerhub

---
### Commit


---
### Push 
`docker tag alexrodriguezlop/hdn.pg/my_alpine:v2`

`docker login -u alexrodriguezlop`

`$ sudo docker push alexrodriguezlop/alpine_v2`

---
## Github

1. Buid:
`docker build -t alexrodriguezlop/TAG .`

2. Tag
`docker tag ID_IMAGEN docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`

**Nota:** `docker image push is only supported with a tag of the format :owner/:repo_name/:image_name.`

3. Login:
`cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u alexrodriguezlop@gmail.com --password-stdin`

4. Push 
`docker push docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`

