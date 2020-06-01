import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TaskCard = (props) => {
  return(
    <div className="card-container">
        <div className="desc">
            <div>
              <h3 onClick={props.showTask}>{ props.title }</h3>
              <ul>
                <li>{props.subtasks}</li>
                <li>completed: {props.completed}</li>
              </ul>
            </div>
            {/* Iterate through subtasks here? */}
        </div>
    </div>
  )
};

export default TaskCard;






