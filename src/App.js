import React, { useState, useEffect, useRef } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {	
	const getActiveTodosCount = (todos) => {
		let count = 0;
		for(let item of todos)
			if (!item.isFinished) ++count;
		return count;
	}

	const [todos, setTodos] = useLocalStorage('todoApp', []);
	const [lastTodoId, setLastTodoId] = useLocalStorage('todoAppLastItemId', 0);

	const [activeTodos, setActiveTodos] = useState(getActiveTodosCount(todos));
	const [editingTodo, setEditingTodo] = useState(null);


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

	const addTodo = (text) => {
		text = text.trim();
		if(!text)
			return;

		let newTodo = { id: lastTodoId + 1, text: text }
		setTodos([newTodo, ...todos]);
		setLastTodoId(lastTodoId + 1);
	}

	const updateTodo = (id, text) => {
		setTodos(todos.map((item) => {
			if(item.id == id) item.text = text
			return item;
		}));
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
							deleteAll={deleteAll}
							editingTodo={editingTodo}
							setEditingTodo={setEditingTodo}
							updateTodo={updateTodo}/>
			</div>
		</div>
	);
}

export default App;
