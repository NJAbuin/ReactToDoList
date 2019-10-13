import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddToDo";
import About from "./components/pages/About";
import uuid from "uuid"; //generador de ids para para database placeholder

import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Finish Crash Course",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Make To Do List",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Tomar rola",
        completed: false
      }
    ]
  };

  //toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = todo.completed ? false : true;
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title, //title:title
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
