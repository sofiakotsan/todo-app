import React from "react";
import TodoItem from "./TodoItem";
import Button from "./../UI/Button/Button";
import "./TodoList.css"

const TodoList = ({items, deleteItem, toggleIsFinished, 
                    finishAll, deleteAll, activeTodos,
                    editingTodo, setEditingTodo, updateTodo, ...props}) => {
    return (
        <div className="todo-list-wrap">
            <div className="todo-list">
                <div className="todo-list-inner">
                    {
                        items.map(item => {
                            return  <TodoItem   item={item} 
                                                key={item.id} 
                                                deleteItem={deleteItem} 
                                                toggleIsFinished={toggleIsFinished}
                                                editingTodo={editingTodo}
                                                setEditingTodo={setEditingTodo}
                                                updateTodo={updateTodo}/>
                        })
                    }
                </div>
            </div>
            <div className="todo-list-controls">
                <Button onClick={finishAll} disabled={!activeTodos}>Finish All</Button>
                <Button onClick={deleteAll} btnStyle="outline" disabled={items.length === 0}>Clear</Button>
            </div>
            
        </div>
    );
}

export default TodoList;