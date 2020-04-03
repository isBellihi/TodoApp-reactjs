import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/todoActions";

class Todos extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
  }

  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item
});

export default connect(mapStateToProps, { fetchTodos })(Todos);
