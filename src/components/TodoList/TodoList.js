import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({items, deleteItem, ...props}) => {
    return (
        <div className="todo-list-wrap">
            <div className="todo-list">
                {
                    items.map(item => {
                        return <TodoItem item={item} key={item.id} deleteItem={deleteItem}/>
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;