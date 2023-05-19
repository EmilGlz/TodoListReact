import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Item from './Item/Item';

function Items(props) {
    return (
        props.allTasks.map((item, index) => 
            <Item key = {index} taskChecked={props.taskChecked} task ={item}/>
        )
   );
}
export default Items;
