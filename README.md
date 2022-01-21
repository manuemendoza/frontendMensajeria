# Frontend_ManuChat Version 1.0

El proyecto consiste en el diseño e implementación de una aplicación web de mensajería open source, ManuChat, que tiene la intención de poderse utilizar ya sea para ámbito privado como para empresa. 

Este  es el Frontend de la aplicación de Chat que complementa al Backend realizado previamente (https://github.com/manuemendoza/backendMensajeria).

## Comenzando 🚀

Este Frontend está basado en React como librería principal de JavaScript. Además se ha implementado la herramienta Redux para la gestión del estado.También se ha usado Sass como preprocesador de CSS.

### Instalación 🔧

Una vez clonado, lo primero que debes hacer en la carpeta del proyecto es un npm i para poder instalar las distintas tecnologias y Fremeworks.

TECNOLOGIAS USADAS
- React
- SASS

## Uso

Una vez desplegado, ya sea en AWS o tu servicio de confianza, las url  seran las siguientes:

### LOGIN
![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/login.JPG)

En estas ruta accederiamos al login que sino yo estas registradro tienes un enlace que te  redirecionara en a la creación de usuario.

````WWW.AQUIDEBERIAIRTUSERVER.COM````



### REGISTRO

![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/register.JPG)

En esta ruta accedriamos al resgitro de usuarios. Una vez que hayamos rellenado todos los campos al pulsar en el boton de crear, nos creara un usuario y se autologueara. Esto nos redirecciónará a la vista de Chatas 

````WWW.AQUIDEBERIAIRTUSERVER.COM/register````

### CHAT

![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/Chat.JPG)
En esta ruta accedriamos al chat donde se nos mostrara la lista de chat. Si es tu primera vez en el chat debes de agregar un contacto, para ell deberemos clickear en el simbolito de usurio esto te redireccionara a la tu lista de usurios, De lo contrario si ya tienes un chat creado puedes clickear en el usuario que se muestra en la lista de chats para iniciar o seguir la conversacion

````WWW.AQUIDEBERIAIRTUSERVER.COM/register````

nota: demomento el boton de mas se encuentra deshabilitado ya que se implementara en futuras versiones.

### Perfil del Usuario 

````WWW.AQUIDEBERIAIRTUSERVER.COM/user````

![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/usuario.JPG)
En esta ruta accedriamos tu perfil de usuario donde se nos mostrara la lista de contactos que tienes.

Si es tu primera vez en el chat debes de agregar un contacto, para ello deberemos clickear en el simbolito de mas esto te desplegara una vista dondes debes buscar por email el usuario que estas buscando una vez encontrado solo tienes que dar al boton de agregar, este usuario se pintar en tu lista de contacto.
![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/agregarusuario.JPG)

Para iniciar conversación con un contacto, simplemente clickeas en el nombre del contacto. se abrira el perfil el contacto donde podras iniciar la conversacion o borrar dicho contacto. 
![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/perfilcontacto.JPG)
````WWW.AQUIDEBERIAIRTUSERVER.COM/user````

### Actualización del perfil de usario ó logout

![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/perfildeusuario.JPG)

Para Actualizar tu Perfil simplemente tienes que clickear en el boton del perfil, se despleagra una ventanita con dos opciones mi perfil y cerrar sesión. Si pulsas la primera 
se despegara actualizar tu perfil de usuario
![Image text](https://github.com/manuemendoza/frontendMensajeria/blob/main/imganes_README/actualizarperfil.JPG)

````WWW.AQUIDEBERIAIRTUSERVER.COM/users````

## Vesiones de la aplicación

Actualmente la aplicacion se encuantra en la la version 1.0

En esta versión la aplicación los usuarios podrán realizar la siguientes funciones:

Hacer un CRUD de usuario completo (Crear, Modificar, Obtener sus datos, eliminar sus datos).
añadir contactos(también eliminarlos).
enviar mensajes a sus contactos.
búsqueda de sus mensajes.

En esta versión el mecanismo de escucha es mediante polling.
### versión  2.0

En esta versión se implementará las notificaciones a tiempo real usando la tecnología WebSocket. Además También se implementará la creación de grupos y administrarlo 

WebSocket
Creación de grupos (modificación de grupos)

### versión 3.0
además también  se implementarán nuevas funciones:

Actualizaciones de mensajes.
Se  podrá enviar imágenes y archivos.

## Ejecutando las pruebas ⚙️

En esta url encontraras un ManuChat desplegado (http://manuchat.mendozanegrea.com/) donde prodrás ver una demo de la aplicación para ello existen tres usuarios ya creado 
````
user : fortune@user.com
password: fortune

user : jax@user.com
password: jax

user : cono@user.com
password: cono

````
## Autores 

* **Manuel Mendoza** - *Desarrollador*  

## Gratitud 🎁

Queria dar las gracias al equipo de GeeksHups academy por su apoyo para la realización de este proyecto.
