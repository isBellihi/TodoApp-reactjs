import Axios from "axios";
import { FETCH_TODO, NEW_TODO } from "./types";

export function fetchTodos() {
    return function(dispatch){
        Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
            res => dispatch({
                type: FETCH_TODO,
                payload: res.data
            })
          );
    }
}

export function postTodo(postTodo) {
    return function(dispatch){
        Axios.post("https://jsonplaceholder.typicode.com/todos", postTodo).then(
            res => dispatch({
                type: NEW_TODO,
                payload: res.data
            })
          );
    }
}