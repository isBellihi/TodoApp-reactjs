import React from 'react';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with family",
        completed: true
      },
      {
        id: 3,
        title: "prepare for interview",
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} />
    </div>
  );
  }
}

export default App;
