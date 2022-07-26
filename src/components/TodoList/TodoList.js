import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = () => {
    let item={
        id: 1,
        text: 'Task 1',
    }
    return (
        <div className="todo-list">
            <TodoItem item={item}/>
        </div>
    );
}

export default TodoList;