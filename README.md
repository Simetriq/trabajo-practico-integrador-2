Sistema completo de blog personal con autenticación JWT, gestión de usuarios, artículos, etiquetas y comentarios. Desarrollado con Node.js, Express, MongoDB y Mongoose.

● Relación 1:1 embebida: User ↔ Profile (profile embebido en User)
● Relación 1:N referenciada: User → Article (author referenciado)
● Relación 1:N referenciada: Article → Comment (article referenciado)
● Relación N:M referenciada: Article ↔ Tag (array de ObjectIds)

Profile embebido en User (1:1 embebida)

Ventajas: Consultas más rápidas al tener toda la información del perfil en un solo documento
Desventajas: Límite de tamaño (16MB por documento en MongoDB)
Decisión: Ideal para datos que siempre se acceden junto con el usuario

User → Article (1:N referenciada)

Ventajas: Evita duplicación, mantiene consistencia
Desventajas: Requiere populate para obtener datos del autor
Decisión: Óptima para relaciones donde un usuario tiene muchos artículos

Article ↔ Tag (N:M referenciada)

Ventajas: Flexibilidad para etiquetas compartidas entre artículos
Desventajas: Consultas más complejas con populate
Decisión: Ideal para relaciones muchos a muchos donde las etiquetas son independientes

Eliminación en Cascada

Al eliminar artículo → se eliminan sus comentarios automáticamente
Al eliminar tag → se remueve de todos los artículos asociados

Eliminación Logica 

Solamente de User → se hace un update del campo deletedAt

