import React from 'react';
import '../App.css';

const TaskPage = (props) => {
  return (
    <div> 
      <button style={{cursor: "pointer"}} onClick={props.manageTasks}>Back</button>
      <h1>Task</h1>
      <h2>{props.task.title}</h2>
    </div>
  )
};

export default TaskPage;