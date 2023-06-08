import React, { useState } from 'react';

function TodoListApp() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && task !== '') {
      addTask();
    }
  };

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Agregar tarea"
      />
      <ul>
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Eliminar</button>
            </li>
          ))
        ) : (
          <li>No hay tareas, añadir tareas</li>
        )}
      </ul>
    </div>
  );
}

export default TodoListApp;

