import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const TodoForm = () => {
    return (
        <div>
            <Input placeholder="What do you want to do?"/>
            <Button>Add Task</Button>
        </div>
    );
}

export default TodoForm;