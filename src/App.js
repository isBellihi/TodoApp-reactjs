import React from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Axios from "axios";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({
        todos: res.data
      })
    });
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({ todos: this.state.todos.filter(a => a.id !== id) });
    })
  };

  addTodo = title => {
    const newTodo = {
      title: title,
      completed: false
    };
    Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    .then(res => {
      this.setState({
        todos: [...this.state.todos, res.data]
      });
    });
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
            />
            <Route path="/about"  component={ About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
