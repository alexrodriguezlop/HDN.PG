## Solución de errores en PR

#### Error PR Hito con PR Objetivos caducado
Si han pasado mas de 7 dias desde el PR de objetivos, el test Travis dará por malo el Pr.
Para solucionarlos: 

1.  Deshacemos los cambios en nuestro repo local sobre el Hito.
2.  Después modificamos el fichero objetivos.
3.  ``Git commit -a -m "Actualizados objetivos"``
4.  ``Git push``, Ahora el PR abierto pasará ha ser de objetivos.
5. 	Editamos los detalles del PR para adaptarlos a objetivos.
6. 	Cuando finalicen los test, el PR se cerrará y podremos abrir uno nuevo para el Hito.