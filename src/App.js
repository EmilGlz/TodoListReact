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
      setTasks(oldArray => [...oldArray, {...task, id: oldArray.length}] );
    }
  }

  function taskIsChecked(index, isChecked)
  {
      // setTasks((lastArray)=>{
      //   lastArray[index].isChecked = isChecked;
      //   return lastArray;
      // })
  }

  function removeTask(index){
    // setTasks((prevArray)=>[])
  }

  return (
    <div className="App">
      <AddInput taskAdded = {addTask} />
      <Items allTasks = {tasks} taskChecked={taskIsChecked}/>
    </div>
  );
}

export default App;
