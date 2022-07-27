import React, {ReactComponent} from "react";
import "./TodoList.css";
import { ReactComponent as EditIcon } from "./img/edit.svg";
import { ReactComponent as DeleteIcon } from "./img/delete.svg";

const TodoItem = ({item, ...props}) => {
    return (
        <div className="todo-item">
            <div className="todo-item-info">
                <span className="todo-item-text">
                    {item.text}
                </span>
            </div>
            <div className="todo-item-controls">
                <button className="todo-item-btn edit-btn"><EditIcon/></button>
                <button className="todo-item-btn delete-btn"><DeleteIcon/></button>
            </div>
        </div>
    );
}

export default TodoItem;