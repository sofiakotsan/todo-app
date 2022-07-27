import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({items, deleteItem, toggleIsFinished, ...props}) => {
    return (
        <div className="todo-list-wrap">
            <div className="todo-list">
                {
                    items.map(item => {
                        return  <TodoItem   item={item} 
                                            key={item.id} 
                                            deleteItem={deleteItem} 
                                            toggleIsFinished={toggleIsFinished}/>
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;