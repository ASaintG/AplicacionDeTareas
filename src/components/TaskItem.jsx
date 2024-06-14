import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onDelete, onEdit, onToggleState }) => {
  // Estilo condicional para la tarea dependiendo de su estado (completada o no)
  const taskStyle = {
    textDecoration: task.estado ? 'line-through' : 'none',
    color: task.estado ? '#2ecc71' : 'black',
  };

  // Maneja el clic en el título de la tarea para editarla
  const handleTitleClick = (e) => {
    e.stopPropagation(); // Evitar la propagación del evento al contenedor padre
    onEdit(); // Llamar a la función onEdit al hacer clic en el título
  };

  return (
    <div className="task-card">
      <div className="task-container">
        {/* Checkbox para marcar/desmarcar la tarea como completada */}
        <input
          type="checkbox"
          className="round-checkbox"
          checked={task.estado}
          onChange={() => onToggleState(task)}
        />
        {/* Título de la tarea */}
        <span 
          className={`task-name ${task.estado ? 'completed' : ''}`} 
          style={taskStyle} 
          onClick={handleTitleClick}
        >
          {task.name}
        </span>
        <div className="task-actions">
          {/* Botón para eliminar la tarea */}
          <button onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
