import React, { memo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';

function Item(props) {
  const [isChecked, setIsChecked] = useState(props.task.isChecked)
  function checkboxClicked()
  {
    setIsChecked(prevValue => !prevValue);
    props.taskChecked(props.task.id, !isChecked);
  }

  return (
        <div className="card-body add-input-container ">
            <p className="card-text">{props.task.id + " " + props.task.description}</p>
          <button className='button'>
            <input className="form-check-input" checked={isChecked} onChange={checkboxClicked} type="checkbox" value ={"isChecked"} id="flexCheckDefault"/>
          </button>

          <button className='button'>
            <img src='./edit.png' /> 
          </button>
          
          <button className='button'>
            <img src='./trash.png' /> 
          </button>
        </div>
   );
}
export default Item;
