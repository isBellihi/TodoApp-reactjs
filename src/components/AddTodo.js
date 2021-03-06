import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { postTodo } from "../actions/todoActions";


class AddTodo extends Component {

  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.title,
      completed: false
    };
    this.props.postTodo(newTodo);
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <span style={{ flex: "2" }} />
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          style={{ flex: "80", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <span style={{ flex: "2" }} />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "6" }}
        />
        <span style={{ flex: "2" }} />
      </form>
    );
  }
}

AddTodo.propTypes = {
  postTodo: PropTypes.func.isRequired
}

export default connect(null, {postTodo})(AddTodo);