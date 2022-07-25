import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<div className="todo-app has-purple-gradient-bg">
			<TodoForm/>
			<TodoList/>
		</div>
	);
}

export default App;
