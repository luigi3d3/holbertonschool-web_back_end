import ClassRoom from './0-classroom';

// Función para inicializar las aulas
function initializeRooms() {
  // Creamos las instancias de ClassRoom con los tamaños especificados
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Devolvemos un array con las instancias creadas
  return [room1, room2, room3];
}

// Exportamos la función para que pueda ser utilizada en otros archivos
export default initializeRooms;
