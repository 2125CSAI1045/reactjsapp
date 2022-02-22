import React from 'react';
import Button from "@material-ui/core/Button";
import ADDIcon from '@material-ui/icons/Add';

const ToDoList = () => {
return ( 
   <>
    <div className="main_div">
     <div className="center_div">
     <br />
    <h1> ToDo List </h1>
     <br />
     <input type="text" placeholder="Add an Item "
     <Button ClassName="newBtn">
      <AddIcon />
    </Button>
    
     <br />
     <ol>
          <li> input your roll no</li>

     </ol>
     <br />



   </div>
    </div>
   </>


    );
};