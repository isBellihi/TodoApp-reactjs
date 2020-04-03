import { combineReducers } from "redux";
import postReducers from "./todoReduces"

export default combineReducers({
    todos: postReducers
})