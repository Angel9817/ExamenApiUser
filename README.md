# ExamenApiUser
Api User en NodeJS

# Clonar repositorio
* Ejecutar el comando en la terminal de su preferencia git clone https://github.com/Angel9817/ExamenApiUser.git
* Luego de clonar el repositorio acceder al mismo y luego Ejcutar npm install
* Por último ejcutar node main.js en la raiz del proyecto
# Crear la base de datos
* Se debe crear una base de datos con el nombre "exameniii" en PostgreSQL
* Una tabla users con las columnas id,cedula_identidad, nombre,primer_apellido, segundo_apellido,fecha_nacimiento.

# Utilizar los endpoints
* Los siguientes son los endpoints disponibles
  * GET -> http://localhost:3000/usuarios = Lista todos los usuarios
  * GET -> http://localhost:3000/estado = Muestra detalles generales de la API
  * GET -> http://localhost:3000/usuarios/promedio-edad = Promedio de las edades de los usuarios
  * POST -> http://localhost:3000/usuarios = Crear un nuevo usuario
  * PUT -> http://localhost:3000/usuarios/id = Actualizar un usuario existente
  * DELETE -> http://localhost:3000/usuarios/id = Borrar un usuario existente
