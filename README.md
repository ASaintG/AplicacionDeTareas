# Aplicación de Gestión de Tareas

Este repositorio contiene una aplicación simple de gestión de tareas construida con React. Permite a los usuarios agregar, editar, eliminar y marcar como completadas sus tareas.

## Características

- Agregar una nueva tarea con nombre, fecha, descripción y estado inicial.
- Editar tareas existentes.
- Eliminar tareas.
- Cambiar el estado de completado de las tareas.
- Guardar las tareas localmente usando localStorage para persistencia.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:
task-manager-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── stylesTaskList.css
│   │   └── taskEditForm.css
│   │
│   ├── components/
│   │   ├── TaskItem.js
│   │   └── TaskEditForm.js
│   │
│   ├── pages/
│   │   └── TaskList.js
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
└── README.md

## Instrucciones para Empezar

### Prerrequisitos

- Node.js y npm instalados en tu máquina. Puedes descargarlos desde [Node.js](https://nodejs.org/).

### Instrucciones de Configuración

1. **Clonar el repositorio:**


   git clone <URL_DEL_REPOSITORIO>
   cd task-manager-app

### Instalar dependencias:
npm install
###  Ejecutar la aplicación en modo de desarrollo:
npm start
### Construir la aplicación para producción:
npm run build
Este comando crea una compilación de producción de la aplicación en el directorio build.
Desplegar la aplicación:

Sube los contenidos del directorio build a tu servicio de hosting preferido.
