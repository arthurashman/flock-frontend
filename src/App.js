import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import TaskCard from './components/TaskCard';
import CreateTask from './components/CreateTask';

class App extends Component {
  state = {
    tasks: ["item"],
    selectedTask: [],
    toDoList: ["Sort the laundry"],
    toDoListView: true,
    manageTasksView: false,
    taskView: false,
    subtaskView: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:8080/tasks')
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
      .catch(err =>{
        console.log('Error retrieving tasks');
      })
  };

  manageTasksHandler = () => {
    this.setState({toDoListView: !this.state.toDoListView})
    this.setState({manageTasksView: !this.state.manageTasksView})
  }

  showTaskHandler = (id) => {
    const taskIndex = this.state.tasks.findIndex(t => {
      return t.id === id
    })
  
    const task = {
      ...this.state.tasks[taskIndex] 
    }
    
    this.setState({selectedTask: task})
    this.setState({manageTasksView: !this.state.manageTasksView})
    this.setState({taskView: !this.state.taskView})
  }
  

  render() {
    let manageTasksPage = null
    let taskPage = null
    let toDoPage = null

    if(this.state.toDoListView) {
      if(this.state.toDoList.length < 1){
        toDoPage = (
          <div>
            <h1>Todo</h1>
            <h3>You have nothing on your list</h3>
            <button onClick={this.manageTasksHandler}>Manage Tasks</button>
          </div>
        )
      }

      if(this.state.toDoList.length > 0) {
        toDoPage = (
          <div>
            <h1>Todo</h1>
            <h3>Next up:</h3>
            <h3>{this.state.toDoList[0]}</h3>
            <button onClick={this.manageTasksHandler}>Manage Tasks</button>
          </div>
        )
      }
    }

    if (this.state.manageTasksView) {
      manageTasksPage = (
        <div>
          <h1>Manage tasks</h1>
          {this.state.tasks.map((task, index) => {
            return <TaskCard
            title={task.title}
            subtasks={task.subtasks}
            completed={String(task.completed)}
            key={task._id}
            showTask={() => this.showTaskHandler(task._id)}/>
          })}      
          <Router>
            <CreateTask />
          </Router>
        </div>
      )
    }

    if (this.state.taskView) {
      taskPage =(
        <div> 
          <h1>Task page</h1>
          <h2>{this.state.selectedTask.title}</h2>
        </div>
        )
    }

    return (
        <div>
          {manageTasksPage}
          {taskPage}
          {toDoPage}        
        </div>
    );
  
  }
}  

export default App;
