import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateTask from './components/CreateTask';
import ShowTaskList from './components/ShowTaskList';
import ShowTaskDetails from './components/ShowTaskDetails';
import UpdateTask from './components/UpdateTask';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowTaskList} />
          <Route path='/create-task' component={CreateTask} />
          <Route path='/edit-task/:id' component={UpdateTask} />
          <Route path='/show-task/:id' component={ShowTaskDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
