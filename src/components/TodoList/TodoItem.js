import React, {ReactComponent, useState, useEffect} from "react";
import "./TodoList.css";
import { ReactComponent as EditIcon } from "./img/edit.svg";
import { ReactComponent as DeleteIcon } from "./img/delete.svg";
import { ReactComponent as SaveIcon } from "./img/save.svg";
import { ReactComponent as CancelIcon } from "./img/cancel.svg";

const TodoItem = ({item, deleteItem, toggleIsFinished, editingTodo, setEditingTodo, updateTodo, ...props}) => {
    let todoClassName = 'todo-item' + (item.isFinished ? ' todo-item--finished' : '') + 
                        (editingTodo === item.id ? ' todo-item--edited' : '');

    const [newTodoText, setNewTodoText] = useState(item.text);

    useEffect(() => {
        if(editingTodo == item.id)
            setNewTodoText(item.text);
    }, [editingTodo])

    const onTextChange = (e) => {
        setNewTodoText(e.target.value);
    }

    const onTodoUpdate = (e) => {
        if(newTodoText === item.text)
            onCancelUpdate(e);

        e.stopPropagation();
        if(newTodoText.trim()) {
            updateTodo(item.id, newTodoText);
            setEditingTodo(null);
        }
    }

    const onCancelUpdate = (e) => {
        e.stopPropagation();
        setEditingTodo(null);
    }

    const onFinishTask = () => {
        if(editingTodo === item.id)
            return;

        toggleIsFinished(item.id)
    }

    return (
        <div className={todoClassName} onClick={() => {onFinishTask(item.id, item.text)}}>
            <div className="todo-item-info">
                {
                    editingTodo === item.id && !item.isFinished
                    ? 
                    <form method="post" className="todo-edit-form" 
                        onClick={(e) => {e.stopPropagation()}} onSubmit={(e) => { e.preventDefault(); onTodoUpdate(e); }}>
                        <input className="todo-edit-input" type="text" name="task_text" minLength="1" maxLength="150"
                        value={newTodoText} onChange={onTextChange}/>
                    </form>

                    : 
                    <span className="todo-item-text">
                        {item.text}
                    </span>
                }
                
            </div>
            {
                editingTodo === item.id && !item.isFinished
                ?
                <div className="todo-item-controls">
                    <button className="todo-item-btn edit-btn">
                            <SaveIcon onClick={onTodoUpdate}/>
                    </button>
                            
                    <button className="todo-item-btn delete-btn">
                            <CancelIcon onClick={onCancelUpdate}/>
                    </button>
                </div>
                
                :
                <div className="todo-item-controls">
                    <button className="todo-item-btn edit-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                setEditingTodo(item.id);
                            }}>
                            <EditIcon/>
                    </button>
                            
                    <button className="todo-item-btn cancel-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteItem(item.id); 
                            }}>
                            <DeleteIcon/>
                    </button>
                </div>
            }
        </div>
    );
}

export default TodoItem;