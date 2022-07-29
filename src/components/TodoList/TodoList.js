import React from "react";
import TodoItem from "./TodoItem";
import Button from "./../UI/Button/Button";
import "./TodoList.css"

const TodoList = ({items, deleteItem, toggleIsFinished, ...props}) => {
    return (
        <div className="todo-list-wrap">
            <div className="todo-list">
                <div className="todo-list-inner">
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
            <div className="todo-list-controls">
                <Button>Finish All</Button>
                <Button style="outline">Clear</Button>
            </div>
            
        </div>
    );
}

export default TodoList;