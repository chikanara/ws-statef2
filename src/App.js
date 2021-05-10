import React, { Component } from "react";
import AddTask from "./components/addtask/AddTask";
import TaskList from "./components/tasklist/TaskList";
import "./App.css";

export class App extends Component {
  state = {
    tasklist: [
      {
        id: 1,
        task: "Learn HTML and CSS",
        isDone: true,
      },
      {
        id: 2,
        task: "Learn JS",
        isDone: true,
      },
      {
        id: 3,
        task: "Learn react js",
        isDone: false,
      },
    ],
  };

  handleDelete = (idTask) => {
    this.setState({
      tasklist: this.state.tasklist.filter((todo) => todo.id !== idTask),
    });
  };
  handleComplete = (idTask) => {
    this.setState({
      tasklist: this.state.tasklist.map((todo) =>
        todo.id === idTask ? { ...todo, isDone: !todo.isDone } : todo
      ),
    });
  };

  handleAdd = (newTask) => {
    if (newTask) {
      this.setState({
        tasklist: [
          ...this.state.tasklist,
          { id: Math.random(), isDone: false, task: newTask },
        ],
      });
    } else alert("Enter a new task");
  };

  render() {
    return (
      <div className="app">
        <h1>Todo app</h1>
        <AddTask handleAdd={this.handleAdd} />
        <TaskList
          tasks={this.state.tasklist}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
