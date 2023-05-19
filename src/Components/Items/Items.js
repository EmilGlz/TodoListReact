import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Item from './Item/Item';

function Items(props) {
    const mystyle = {
        padding: "10px",
        fontFamily: "Arial",
        marginBottom: "100px"
      };
    return (
        <div style={mystyle}>
            {
                props.allTasks.map((item, index) => 
                    <Item style={mystyle} key = {index} taskChecked={props.taskChecked} task ={item}/>)
            }
        </div>
   );
}
export default Items;
