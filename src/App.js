import React, { useState } from 'react';
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

	const [todos, setTodos] = useState(items);

	const deleteItem = (itemId) => {
		setTodos(todos.filter(item => item.id != itemId));
	}

	const toggleIsFinished = (itemId) => {
		setTodos(todos.map(item => {
			if(item.id == itemId) item.isFinished = !item.isFinished;
			return item;
		}));
	}

	return (
		<div className='todo-app has-purple-gradient-bg'>
			<div className='container'>
				<h1 className='h1'>You currently have: 4 tasks</h1>
				<TodoForm/>
				<TodoList 	items={todos} 
							deleteItem={deleteItem} 
							toggleIsFinished={toggleIsFinished}/>
			</div>
		</div>
	);
}

export default App;
