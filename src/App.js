import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App(){ 
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id : toDoList.length===0 ? 1 : toDoList[toDoList.length-1].id+1,
      taskName: newTask
    }
    setToDoList([...toDoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task)=>{
      return task.id !== id;
    }))
  }
  
  return (
  <div className='App1'>
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="list">{toDoList.map((task)=>{
      return (
      <div>
        <h1>{task.taskName}</h1>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
      )
    })}</div>
  </div>
  );
}

export default App;
