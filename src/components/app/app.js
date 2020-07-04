import React from "react";
import Header from "../app-header";
import InputSearch from "../input-search";
import TaskFilter from "../task-filter";
import ToDoList from "../todo-list";
import CreateNewElement from "../create-new-element";
import Statistics from "../statistics";

import "./app.scss";

class App extends React.Component {
  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
  };

  onDelete = (id) => {
    this.setState((prev) => {
      const todos = this.state.todolist.filter((todo) => {
        return todo.id !== id;
      });
      return {
        todolist: todos,
      };
    });
  };

  render() {
    const { todolist } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch />
        <TaskFilter />
        <ToDoList todos={todolist} onDelete={this.onDelete} />
        <CreateNewElement />
        <hr />
        <Statistics />
      </div>
    );
  }
}

export default App;
