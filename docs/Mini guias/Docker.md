** Mini Guia de Docker**


---
### Imagen y container

`$ docker images`

---
### Dockerfile


---
### Construir

`$ docker build -t alexrodriguezlop/alpine_v1 .`


---
### Eliminar



##Dockerhub

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

2. Tag
`docker tag c233aff39436 docker.pkg.github.com/alexrodriguezlop/hdn.pg/my_alpine:v2`

**Nota:** `docker image push is only supported with a tag of the format :owner/:repo_name/:image_name.`

3. Login:
`cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u alexrodriguezlop@gmail.com --password-stdin`

4. Push 
`docker push docker.pkg.github.com/alexrodriguezlop/hdn.pg/my_alpine:v2`


