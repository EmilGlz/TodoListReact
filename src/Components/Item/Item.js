import React, { memo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';

function Item(props) {
  const [showEditPanel, setshowEditPanel] = useState(false)
  const [newDescription, setnewDescription] = useState('')

  function checkboxClicked()
  {
    props.taskChecked(props.task.id, !props.task.isChecked);
  }

  function editClicked()
  {
    setshowEditPanel(prevValue => !prevValue)
  }

  function handleNewDescriptionChange(event)
  {
    setnewDescription(event.target.value)
  }

  function descriptionChanged()
  {
    props.taskDescriptionUpdated(props.task.id, newDescription);
    setshowEditPanel(false)
  }

  function deleteTask()
  {
    props.taskRemoved(props.task.id);
  }

  return (
        // props.task && props.task.isChecked && props.task.description &&
        props &&
        <div className="card-body add-input-container ">
            <p className="card-text">{props.task.id + ' ' + props.task.description}</p>
          <button className='button'>
            <input className="form-check-input" checked={props.task.isChecked} onChange={checkboxClicked} type="checkbox" value ={props.task.isChecked} id="flexCheckDefault"/>
          </button>

          <button onClick={editClicked} className='button'>
            <img src='./edit.png' /> 
          </button>
          
          <button onClick={deleteTask} className='button'>
            <img src='./trash.png' /> 
          </button>
          {showEditPanel && <div>
            <input 
            onChange={handleNewDescriptionChange}
            type="text"     
            id="fname" 
            name="firstname" 
            placeholder="New Todo"></input>
            <button className="add-button" onClick={descriptionChanged}>Change Description</button>
          </div>}
        </div>
   );
}
export default Item;
