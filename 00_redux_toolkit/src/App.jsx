import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useSelector } from 'react-redux'

function App() {
	const what = useSelector((state) => state.todos)
	console.log(what)
	return (
		<>
		<AddTodo/>
		<Todos/>
		</>
	)
}

export default App
