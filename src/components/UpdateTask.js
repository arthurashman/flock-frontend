import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtasks: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/tasks/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, task: res.data})
        this.setState({
          title: res.data.title,
          subtasks: res.data.subtasks
          //Iterate through here?
        })
      })
      .catch(err => {
        console.log("Error from UpdateTask");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      subtasks: this.state.subtasks
    };

    axios
      .put('http://localhost:8080/tasks/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-task/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateTask");
      })
  };


  render() {
    return (
      <div className="UpdateTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Task List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Task</h1>
              <p className="lead text-center">
                  Update Task
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Task'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Task</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateTask;