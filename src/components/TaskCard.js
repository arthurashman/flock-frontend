import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TaskCard = (props) => {
  const  task  = props.task;
  return(
    <div className="card-container">
        <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
        <div className="desc">
            <h2>
                <Link to={`/show-task/${task._id}`}>
                    { task.title }
                </Link>
            </h2>
            {/* Iterate through subtasks here? */}
        </div>
    </div>
  )
};

export default TaskCard;