import React, { useState, useEffect } from 'react';
import "../assets/taskEditForm.css"; // Importa los estilos CSS

const TaskEditForm = ({ task, onSave, onCancel }) => {
  // Estado para almacenar la tarea editada
  const [editedTask, setEditedTask] = useState({
    name: '',
    fecha: '',
    description: '',
    estado: false,
  });

  // useEffect para inicializar el estado de editedTask con los datos de la tarea recibida como prop
  useEffect(() => {
    setEditedTask({
      name: task.name || '',
      fecha: task.fecha || '',
      description: task.description || '',
      estado: task.estado || false,
    });
  }, [task]);

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Determina el nuevo valor dependiendo del tipo de input (checkbox o texto)
    const newValue = type === 'checkbox' ? checked : value;

    // Actualiza el estado de la tarea editada con el nuevo valor
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: newValue,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSave = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSave}>
        <label htmlFor="name">Task:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Task"
          value={editedTask.name}
          onChange={handleChange}
        />

        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={editedTask.fecha}
          onChange={handleChange}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="estado">Estado:</label>
        <input
          type="checkbox"
          id="estado"
          name="estado"
          checked={editedTask.estado}
          onChange={handleChange}
        />

        <button className='saveUpdate' type="submit">Guardar Actualización</button>
        <button className='cancelUpdate' type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default TaskEditForm;
