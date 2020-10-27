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


---
### Commit


---
### Push
`$ sudo docker push alexrodriguezlop/alpine_v1`

---
### Github

1. Buid:

2. Tag
`docker tag c233aff39436 docker.pkg.github.com/alexrodriguezlop/hdn.pg/my_alpine:v2`

3. Login:
`cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u alexrodriguezlop@gmail.com --password-stdin`

4. Push 
`docker push docker.pkg.github.com/alexrodriguezlop/hdn.pg/my_alpine:v2`

