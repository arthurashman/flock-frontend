import React from 'react';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import CreateTask from './CreateTask';
import TaskCard from './TaskCard';

const ManageTasksPage = (props) => {
  return (
    <div>
      <button style={{cursor: "pointer"}} onClick={props.toDo}>Back</button>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center input-center">
            <h1>Manage tasks</h1>
            <br></br>
            {props.tasks.map((task, index) => {
              return <TaskCard
              title={task.title}
              subtasks={task.subtasks}
              completed={String(task.completed)}
              key={task._id}
              showTask={() => props.showTask(task._id)}/>
            })} 
            <Router>
              <CreateTask />
            </Router>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </div>
  )
};

export default ManageTasksPage;