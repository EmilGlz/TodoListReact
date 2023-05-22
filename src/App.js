import './App.css';
import AddInput from './Components/AddInput/AddInput';
import React, { useState } from 'react';
import Item from './Components/Item/Item';


const startValues = [
  {
    isChecked: false,
    description: "Work",
    id: 0
  }
]

function App() {
  const [tasks, setTasks] = new useState(startValues);

  function removeTask(index){
    setTasks(prevTasks => prevTasks.filter(task => task.id !== index));
  }
  
  function updateTaskDescription (index, newDescription){
    const newTasks = tasks.map(item =>
      {
        if(item.id === index)
        {
          return {...item, description: newDescription}
        }
      })
    setTasks(newTasks)
  }

  function addTask(task)
  {
    if(task.description != ""){ 
      setTasks(oldArray => [...oldArray, {...task, id: oldArray.length}] );
    }
  }

  function taskIsChecked(index, isChecked)
  {
    const newTasks = tasks.map(item =>
      {
        if(item.id === index)
        {
          return {...item, isChecked: isChecked}
        }
       else if(item.id !== index) {
          return item;
        }
      })
    setTasks(newTasks)
  }

  function removeAllTasks()
  {
    setTasks([])
  }
  function removeCheckedTasks()
  {
    setTasks(prevTasks => prevTasks.filter(task => !task.isChecked));
    
  }

  return (
    <div className="App">
      <AddInput taskAdded = {addTask} />
      <div className='all-items'>
      {
        tasks.map((item, index) => 
        <Item key = {index} taskRemoved = {removeTask} taskDescriptionUpdated = {updateTaskDescription} taskChecked={taskIsChecked} task ={item}/>)
      }
      </div>

      <button onClick={removeAllTasks} className='button'>
        Delete all tasks
      </button>
      <button onClick={removeCheckedTasks} className='button'>
        Delete done tasks
      </button>
        
    </div>
  );
}

export default App;
