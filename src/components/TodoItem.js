import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = ()=> {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            backgroundColor: "#f4f4f4",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        };
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} 
                    onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
