let tareas = [];

// Función para agregar tarea
function agregarTarea() {
  let tarea = prompt("Escribe la nueva tarea:");
  if (tarea) {
    tareas.push(tarea);
    console.log(`Tarea '${tarea}' agregada ✅`);
  } else {
    console.log("No escribiste ninguna tarea ❌");
  }
}

// Función para ver tareas
function verTareas() {
  if (tareas.length === 0) {
    console.log("No tienes tareas pendientes 📭");
  } else {
    console.log("\nTareas pendientes:");
    tareas.forEach((t, i) => {
      console.log(`${i + 1}. ${t}`);
    });
  }
}

// Función para eliminar tarea
function eliminarTarea() {
  verTareas();
  if (tareas.length > 0) {
    let num = parseInt(prompt("Número de la tarea a eliminar:"));
    if (num >= 1 && num <= tareas.length) {
      let eliminada = tareas.splice(num - 1, 1);
      console.log(`Tarea '${eliminada}' eliminada 🗑️`);
    } else {
      console.log("Número inválido ❌");
    }
  }
}

// Bucle principal
function menu() {
  let opcion;
  do {
    opcion = prompt(`
=== MENÚ ===
1. Agregar tarea
2. Ver tareas
3. Eliminar tarea
4. Salir
Elige una opción:
    `);

    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        verTareas();
        break;
      case "3":
        eliminarTarea();
        break;
      case "4":
        console.log("Saliendo del programa... 👋");
        break;
      default:
        console.log("Opción inválida ❌");
    }
  } while (opcion !== "4");
}

menu();
