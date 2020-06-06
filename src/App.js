import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import ManageTasksPage from './components/ManageTasksPage';
import ToDoPage from './components/ToDoPage';
import TaskPage from './components/TaskPage';

class App extends Component {
  state = {
    tasks: [],
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
    this.setState({taskView: false})
    this.setState({toDoListView: false})
    this.setState({manageTasksView: true})
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
  
  toDoHandler = () => {
    this.setState({manageTasksView: !this.state.manageTasksView})
    this.setState({toDoListView: !this.state.toDoListView})
  }

  render() {
    let manageTasksPage = null
    let taskPage = null
    let toDoPage = null

    if(this.state.toDoListView) {
      toDoPage = <ToDoPage
      toDoList={this.state.toDoList}
      manageTasks={() => this.manageTasksHandler()}/>
    }

    if (this.state.manageTasksView) {
      manageTasksPage = <ManageTasksPage 
      tasks={this.state.tasks}
      toDo={() => this.toDoHandler()}
      showTask={() => this.showTaskHandler()}/>
    }

    if (this.state.taskView) {
      taskPage = <TaskPage 
      manageTasks={() => this.manageTasksHandler()}
      task={this.state.selectedTask}/>     
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
