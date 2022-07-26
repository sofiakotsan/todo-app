import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<div className='todo-app has-purple-gradient-bg'>
			<div className='container'>
				<h1 className='h1'>You currently have: 4 tasks</h1>
			</div>
		</div>
	);
}

export default App;
