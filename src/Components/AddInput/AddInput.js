import 'bootstrap/dist/css/bootstrap.css';
import './AddInput.css';
import React, { useState } from 'react';

function AddInput(props) {
    const [newTask, setNewTask] =  new useState({id: 0, isChecked : false, description : ""});

    function addTaskClicked(){
        props.taskAdded(newTask);
    }
    
    function handleChange(event)
    {
        setNewTask({
            id: 0,
            isChecked: false,
            description: event.target.value
        })
    }

    return (
    <div className="add-input-container">
        <input 
            onChange={handleChange}
            type="text"     
            id="fname" 
            name="firstname" 
            placeholder="New Todo"></input>
        <button className="add-button" onClick={addTaskClicked}>Add new task</button>
    </div>
   );
}

export default AddInput;
