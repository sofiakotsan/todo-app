import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
	let items = [
		{ id: 1, text: 'Task 1' },
		{ id: 2, text: 'Task 2' },
		{ id: 3, text: 'Task 3' },
		{ id: 4, text: 'Task 4' },
		{ id: 5, text: 'Task 5' },
		{ id: 6, text: 'Task 6' },
		{ id: 7, text: 'Task 7' },
		{ id: 8, text: 'Task 8' },
		{ id: 9, text: 'Task 9' },
	];

	return (
		<div className='todo-app has-purple-gradient-bg'>
			<div className='container'>
				<h1 className='h1'>You currently have: 4 tasks</h1>
				<TodoForm/>
				<TodoList items={items}/>
			</div>
		</div>
	);
}

export default App;
