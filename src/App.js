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

	const getActiveTodosCount = (todos) => {
		let count = 0;
		for(let item of todos)
			if (!item.isFinished) ++count;
		return count;
	}

	const [todos, setTodos] = useState(items);
	const [activeTodos, setActiveTodos] = useState(getActiveTodosCount(todos));

	const deleteItem = (itemId) => {
		setTodos(todos.filter(item => item.id != itemId));
		setActiveTodos(getActiveTodosCount(todos));
	}

	const toggleIsFinished = (itemId) => {
		setTodos(todos.map(item => {
			if(item.id == itemId) item.isFinished = !item.isFinished;
			return item;
		}));
		setActiveTodos(getActiveTodosCount(todos));
	}

	const finishAll = () => {
		for(let item of todos)
			if(!item.isFinished) toggleIsFinished(item.id);
	}

	const deleteAll = () => {
		setTodos([]);
		setActiveTodos(getActiveTodosCount([]));
	}

	return (
		<div className='todo-app has-purple-gradient-bg'>
			<div className='container'>
				<h1 className='h1'>
					You currently have: {activeTodos} {activeTodos % 10 == 1 && activeTodos != 11 ? 'task' : 'tasks'}
				</h1>
				<TodoForm/>
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
