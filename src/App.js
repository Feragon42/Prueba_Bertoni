import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from '../src/TodoList';
import AddTasks from '../src/AddTasks';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks: [
        {id: 1, name: "Learn React", status: "p"},
        {id: 2, name: "Learn Scrum", status: "p"},
        {id: 3, name: "Take the dog out", status: "d"}
      ]
    };
  }

  handleOnAddTasks(e){
    e.preventDefault();
    let task = {
      id: this.state.tasks.length+1,
      name: e.target.name.value,
      status: "p"
    };
    console.log(e.target)
    this.setState({
      tasks: this.state.tasks.concat([task])
    })
  }

  handleCheckTask(e){
    e.preventDefault();
    console.log(e.target.getAttribute("n_task"))
    const tasks = this.state.tasks;
    tasks[e.target.getAttribute("n_task")-1].status = "d";
    this.setState({
      tasks
    }); 
  }

  handleDeleteTask(e){
    e.preventDefault();
    console.log(e.target.getAttribute("n_task"))
    const tasks = this.state.tasks;
    tasks.splice(e.target.getAttribute("n_task")-1,1)
    this.setState({
      tasks
    }); 
    console.log(this.state.task)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BERTONI TO-DO </h1><h1>
            <small>This is the Feragon application test</small>
          </h1>
          <i>Sorry about the colors, Im daltonic and have a bad taste</i>
        </div>

        <div>
          <br/>
          <TodoList tasks={this.state.tasks} 
                    checkTask= {this.handleCheckTask.bind(this)}
                    deleteTask = {this.handleDeleteTask.bind(this)}/>
          <br/>
          <AddTasks onAddTasks = {this.handleOnAddTasks.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
