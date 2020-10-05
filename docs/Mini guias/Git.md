# Mini Guia de GIT

## Por donde empezar

#### Configurando y usando ssh
Enlace al final

#### Instalando git
`sudo apt-get install git`

#### Clonar un repositorio remoto
`git clone https://github.com/YOUR_USERNAME/YOUR_FORK.git`

#### Establecer nombre y email en un repositorio
`git config user.name "Mona Lisa"`

`git config user.email "Monalisa@correo.ugr.es"`

Para consultar los datos:

`git config user.name`

`git config user.email `

#### Especifica un nuevo repositorio ascendente remoto que se sincronizará con la bifurcación.
`git remote add upstream https://github.com/JJ/IV-19-20.git`

#### Consultar repositorios
`git remote -v`


#### Actualizar el repositorio antes de hacer nada (Evitar conflictos)
`git pull upstream master --rebase`

*Actualizará nuestro repositorio local a la última versión de la rama master del repositorio upstream.
De este modo no habrá ningún conflicto cuando modifiquemos nuestros ficheros locales*

#### Consultar el estado del repositorio 
`git status`


#### Comentar y añadir
Añade un fichero a la lista de seguimiento.
`git add Fichero`

Elimina un fichero de la lista de seguimiento.
`git rm Fichero`

`git commit -m "Comentario"`

##### Combinando Gitt ADD y Git Commit
`git commit -a -m "Actualizados objetivos semana1"`

*Usando este comando lo haríamos todo de una vez*

##### Cerrando un Isue con el commit
`git commit -m "Comentario close #NumIsue "`

Podemos añadir comit a un issue si no utilizamos la orden *close*

## Eliminar fichero y directorios del repositorio
Podría darse el caso en que eliminamos un directorio dentro de nuestro directorio de trabajo pero este aún sigue en el repositorio. 
También podría darse el caso de que modificamos nuestro fichero *gitignore* y queremos limpiar esos ficheros que ya no pintan nada.

Punto en el que nos encontramos:

**Antes de hacer commit**
Podemos dejar de seguir un fichero:
`git reset HEAD nombre_de_archivo`

O todos:
`git reset HEAD` 

**Después de hacer commit**
Podemos eliminarlos usando:

Borrará un fichero de la lista de seguimiento pero se mantendrá en tu directorio de trabajo.
`git rm --cached nombre_archivo`

Borrará un directorio de forma recursiva de la lista de seguimiento pero se mantendrá en tu directorio de trabajo.
`git rm -r --cached nombre_directorio`

El parámetro "--cached" es el que nos permite mantener los archivos en nuestro directorio de trabajo. 
Si lo quitamos lo referenciado se eliminara de ambos sitios.



#### Interfaz gráfica 
`gitk`

#### Repositorio local -----> Repositorio remoto
`Git push repositorio`

*Actualizará el repositorio que le indiquemos con la copia local, podemos usar TAB para que nos sugiera los repositorios disponibles*

#### Desde mi repositorio en GitHub Remoto crear NEW PULL REQUEST
*Para hacer un PR al repositorio del cual se hizo el fork haremos el PR desde GitHub en nuestro repositorio*

## TAGS

#### Listando etiquetas:
`git tag`

#### Buscando etiquetas:
`git tag -l "v1.*"`

#### Creando etiquetas:
`git tag -a v1.4 -m "my version 1.4"`
	
Añade etiqueta y descripción.

#### Consultar datos de una etiqueta:
`git show v1.4`

#### Push de etiquetas:
`git push origin <tagname>`

#### Eliminar etiquetas:
**Local:**
`$ git tag -d v1.4-lw`

**Remoto:**
```
$ git tag -d v2.0.3

$ git push origin :refs/tags/v2.0.3
```
Podemos usar solo `:` en lugar de `:refs/tags/`

Tambiem podemos usar el atributo `--tags` para que el push afecte a todas.

## Resolución de problemas

### Deshacer el último commit si aun no se ha realizado el *push*
`git reset --hard/--soft HEAD~1`

**--hard:** *Con esta opción estamos indicando que retrocedemos a el comit HEAD ~ 1 y perdemos todas las confirmaciones posteriores. HEAD ~ 1 es un atajo para apuntar al commit anterior al que nos encontramos. CUIDADO, con la opcion –hard, ya que como he dicho se borran todos los commits posteriores al commit al que indicamos.*

**--soft:** *con esta opción estamos indicando que retrocedemos a el commit HEAD ~ 1 y no perdemos los cambios de los commits posteriores. Todos los cambios aparecerán como pendientes para realizar un commit.*

**~1** *Especifica el commit al que revertiremos. Tenemos que tener en cuenta que los commit estan en lista y parte de 0.*

**por ejemplo:**
- para deshacer el último utilizaríamos 1 (para saltar el 0)
- para deshacer el penúltimo utilizaríamos 2 (para saltar el 0 y el 1)


### Deshacer el último commit después de realizar el *push*
`git revert HEAD`

*realiza un nuevo commit que borra el commit que queremos eliminar utilizando el comando revert.*

## Esquemas de funcionamiento en git
![git-fork-clone-flow](git-fork-clone-flow.png)

![git-fork-loop](git-fork-loop.png)


## Enlaces de interés
[Eliminar ficheros y directorios](https://desarrolloweb.com/articulos/eliminar-archivos-git-gitignore.html)

[Configurara SSH](https://medium.com/@ancizj393/crear-una-clave-ssh-en-git-y-vincular-en-tu-cuenta-de-github-e7a6b22bc93f)

[Etiquetas](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

[Rebase](https://stackoverflow.com/questions/18930527/difference-between-git-pull-and-git-pull-rebase)

[Merge & rebase](https://stackoverflow.com/questions/16666089/whats-the-difference-between-git-merge-and-git-rebase/16666418#16666418)

[Fork git y repos remotos1](https://www.neonscience.org/git-setup-remote)

[Fork git y repos remotos2](https://help.github.com/es/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)

[Guía sencilla GIT](https://rogerdudler.github.io/git-guide/index.es.html)

[Algunos comandos GIT](https://help.github.com/en/github/using-git/setting-your-username-in-git)

[Guía GIT JJ](https://github.com/JJ/IV-19-20/blob/master/objetivos/README.md)

[Usando hooks](https://www.hostinger.es/tutoriales/como-usar-git-hooks/)

[Guía sencilla MARKDOWN](https://markdown.es/sintaxis-markdown/)

**[Volver a INICIO](https://github.com/alexrodriguezlop/HDN.PG)**
=== 
