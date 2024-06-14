import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskEditForm from './TaskEditForm';
import "../assets/stylesTaskList.css"; // Importa los estilos CSS

const TaskList = ({ tasks: initialTasks }) => {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState(initialTasks);
  // Estado para almacenar la nueva tarea o la tarea que se está editando
  const [newTask, setNewTask] = useState({ name: '', fecha: '', description: '', estado: false });
  // Estado para almacenar el índice de la tarea que se está editando
  const [editingIndex, setEditingIndex] = useState(null);

  // useEffect para cargar las tareas desde localStorage al montar el componente
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // useEffect para guardar las tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar una nueva tarea a la lista
  const handleAddTask = () => {
    if (newTask.name.trim() !== '') {
      setTasks([newTask, ...tasks]);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  // Función para eliminar una tarea de la lista
  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);

    // Mostrar alerta al eliminar la tarea
    alert('Tarea eliminada');

    // Reiniciar el estado de edición si la tarea eliminada está en edición
    if (editingIndex !== null && editingIndex === tasks.indexOf(task)) {
      setEditingIndex(null);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    } else if (editingIndex !== null && editingIndex > tasks.indexOf(task)) {
      // Ajustar el índice de edición si la tarea eliminada está antes de la tarea en edición
      setEditingIndex(editingIndex - 1);
    }
  };

  // Función para iniciar la edición de una tarea
  const handleEditTask = (task) => {
    setEditingIndex(tasks.indexOf(task));
    setNewTask(task);
  };

  // Función para guardar los cambios en una tarea editada
  const handleSaveEdit = (editedTask) => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  // Función para cancelar la edición de una tarea
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setNewTask({ name: '', fecha: '', description: '', estado: false });
  };

  // Función para manejar la tecla Enter al agregar una nueva tarea
  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter' && newTask.name.trim() !== '') {
      handleAddTask();
    }
  };

  // Función para alternar el estado de una tarea (completada/no completada)
  const handleToggleState = (task) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.indexOf(task);
    updatedTasks[index].estado = !updatedTasks[index].estado;
    setTasks(updatedTasks);
  };

  return (
    <div className='task-list'>
      <div className={editingIndex !== null ? 'task-list hidden' : 'task-list'}>
        <div className='newTask'>
          <input
            type="text"
            className='Name'
            placeholder="Name Task"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            onKeyDown={handleTitleKeyDown}
          />
        </div>
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(task)}
              onEdit={() => handleEditTask(task)}
              onToggleState={() => handleToggleState(task)}
            />
          ))}
        </ul>
      </div>
      {editingIndex !== null && (
        <TaskEditForm
          task={tasks[editingIndex]}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default TaskList;
