import logo from './logo.svg';
import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  }

  const createTask = (title, taskDesc) => {
    const createdTasks = [...tasks, {
      id: Math.round(Math.random() * 999999),
      title: title,
      taskDesc: taskDesc
    }];

    setTasks(createdTasks);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
