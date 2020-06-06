import React from 'react';
import '../App.css';

const TaskCard = (props) => {
  return (
    <div className="card" style={{marginBottom: 15, cursor: "pointer"}} onClick={props.showTask}>
        <div className="desc">
            <div>
              <h3 style = {{ marginTop : 10 }}onClick={props.showTask}>{ props.title }</h3>
              {props.subtasks}
              <br></br>
              <br></br>
            </div>
            {/* Iterate through subtasks here? */}
        </div>
    </div>
  )
};

export default TaskCard;






