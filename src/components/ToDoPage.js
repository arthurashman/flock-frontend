import React from 'react';
import '../App.css';

const ToDoPage = (props) => {
  if(props.toDoList.length < 1){
    return (
      <div>
        <h1>Todo</h1>
        <h3>You have nothing on your list</h3>
        <button style={{cursor: "pointer"}} onClick={props.manageTasks}>Manage Tasks</button>
      </div>
    )
  }

  if(props.toDoList.length > 0) {
    return (
      <div>
        <h1>Todo</h1>
        <h3>Next up:</h3>
        <h3>{props.toDoList[0]}</h3>
        <button style={{cursor: "pointer"}} onClick={props.manageTasks}>Manage Tasks</button>
      </div>
    )
  }
};

export default ToDoPage;