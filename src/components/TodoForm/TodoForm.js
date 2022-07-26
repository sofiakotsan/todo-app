import React from "react";
import './TodoForm.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const TodoForm = () => {
    return (
        <div className="todo-form-wrap">
            <form action="#" className="todo-form">
                <Input placeholder="What do you want to do?"/>
                <Button type="submit">Add Task</Button>
            </form>
        </div>
    );
}

export default TodoForm;