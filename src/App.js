import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ]);

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');

  const handleEditTask = (taskId, taskTitle) => {
    setEditingTaskId(taskId);
    setEditedTaskTitle(taskTitle);
  };

  const handleUpdateTask = (taskId, updatedTaskTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: updatedTaskTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditedTaskTitle('');
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskTitle}
                  onChange={(event) => setEditedTaskTitle(event.target.value)}
                />
                <button
                  onClick={() => handleUpdateTask(task.id, editedTaskTitle)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <span>{task.title}</span>
                <button onClick={() => handleEditTask(task.id, task.title)}>
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
