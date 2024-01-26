import React, { useState } from 'react'
import { useTodo } from '../contexts'

export const ToDoForm = () => {
    const [todo, setTodo] = useState("")
    const {addToDo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addToDo({todo, completed: false}) // don't need completed since we already set the default in context, but set it here to for clarity
        setTodo("") // reset todo
    }

    return (
        <form onSubmit={add} className=' flex'>
            <input type="text" 
            placeholder='Write To-do...'
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit"
            className=' rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
                Add
            </button>
        </form>
    )
}
