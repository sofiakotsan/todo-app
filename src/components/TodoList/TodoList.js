import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({items, ...props}) => {
    return (
        <div className="todo-list-wrap">
            <div className="todo-list">
                {
                    items.map(item => {
                        return <TodoItem item={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;