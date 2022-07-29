import React, {useState} from "react";
import './TodoForm.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const TodoForm = ({addTodo, ...props}) => {
    const [inputValue, setInputValue] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }

    return (
        <div className="todo-form-wrap">
            <form action="#" className="todo-form" onSubmit={submitForm}>
                <Input  name="text" type="text" minlength="1" maxlength="200"
                        placeholder="What do you want to do?"
                        value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                        
                <Button type="submit" disabled={!inputValue.trim().length} >Add Task</Button>
            </form>
        </div>
    );
}

export default TodoForm;