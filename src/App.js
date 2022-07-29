import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {	
	let items = [
		{ id: 1, text: 'Task 1', isFinished: true },
		{ id: 2, text: 'Task 2', isFinished: false },
		{ id: 3, text: 'Task 3', isFinished: true },
		{ id: 4, text: 'Task 4', isFinished: false },
		{ id: 5, text: 'Task 5', isFinished: false },
		{ id: 6, text: 'Task 6', isFinished: false },
		{ id: 7, text: 'Task 7', isFinished: false },
		{ id: 8, text: 'Task 8', isFinished: false },
		{ id: 9, text: 'Task 9', isFinished: false },
	];

	// let lastTodoId = 9;

	const getActiveTodosCount = (todos) => {
		let count = 0;
		for(let item of todos)
			if (!item.isFinished) ++count;
		return count;
	}

	const [todos, setTodos] = useState(items);
	const [activeTodos, setActiveTodos] = useState(getActiveTodosCount(todos));

	const lastTodoId = useRef(10);

	useEffect(() => {
		setActiveTodos(getActiveTodosCount(todos));
	}, [todos]);

	const deleteItem = (itemId) => {
		setTodos(todos.filter(item => item.id != itemId));
	}

	const toggleIsFinished = (itemId) => {
		setTodos(todos.map(item => {
			if(item.id == itemId) item.isFinished = !item.isFinished;
			return item;
		}));
	}

	const finishAll = () => {
		for(let item of todos)
			if(!item.isFinished) toggleIsFinished(item.id);
	}

	const deleteAll = () => {
		setTodos([]);
	}

	const addTodo = (todoText) => {
		todoText = todoText.trim();
		if(!todoText)
			return;

		console.log(lastTodoId.current);
		let newTodo = { id: ++lastTodoId.current, text: todoText }
		setTodos([newTodo, ...todos]);
	}

	return (
		<div className='todo-app has-purple-gradient-bg'>
			<div className='container'>
				<h1 className='h1'>
					You currently have: {activeTodos} {activeTodos % 10 == 1 && activeTodos != 11 ? 'task' : 'tasks'}
				</h1>
				<TodoForm addTodo={addTodo}/>
				<TodoList 	items={todos} 
							deleteItem={deleteItem} 
							toggleIsFinished={toggleIsFinished}
							finishAll={finishAll}
							activeTodos={activeTodos}
							deleteAll={deleteAll}/>
			</div>
		</div>
	);
}

export default App;
