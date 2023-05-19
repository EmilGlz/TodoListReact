import logo from './logo.svg';
import './App.css';
import Items from './Components/Items/Items';
import AddInput from './Components/AddInput/AddInput';
import React, { useState } from 'react';


function App() {

  const startValues = [
    {
      id: 0,
      description: "Work",
      isChecked: true
    }
  ]

  const [tasks, setTasks] = new useState(startValues);

  function addTask(task)
  {
    if(task.description != ""){ 
      task.id = tasks.length;
      setTasks(current => {
        console.log(current);  
        return [...current, task];
      });
    }
  }

  function taskIsChecked(index, isChecked)
  {
    console.log("App.taskIsChecked "+index+"  " + isChecked);
  }

  return (
    <div className="App">
      <AddInput taskAdded = {addTask} />
      <Items allTasks = {tasks} taskChecked={taskIsChecked}/>
    </div>
  );
}

export default App;
