import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtasks: '',
      id: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onConfirm = event => {

  }

  onSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.state.title,
      subtasks: this.state.subtasks
    };

    axios
      .post('http://localhost:8080/tasks', data)
      .then(res => {
        this.setState({
          title: '',
          subtasks: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('Error in CreateTask')
      })
  };
  render() {
    return (
      <div className="CreateTask">
              <h1>Add a new task</h1>
              <form noValidate onSubmit={this.onSubmit} class="form-inline">
                  <input
                    type='text'
                    placeholder='Task name'
                    name='title'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                <input style={{cursor: "pointer"}} 
                  type="submit"
                />
              </form>
            </div>
      
    )
  }
}

export default CreateTask;
