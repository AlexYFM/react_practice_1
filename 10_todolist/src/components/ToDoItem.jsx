import React, { useState } from 'react'
import { useTodo } from '../contexts'

const ToDoItem = ({todo}) => {
    const [isTodoEdit, setIsTodoEdit] = useState(false)
    const [msg, setMsg] = useState(todo.todo) // todo is the whole object, todo is also the string message property -- should probably rename is doing this on own
    const {updateToDo, deleteToDo, toggleComplete} = useTodo()

    const editToDo = () => {
        updateToDo(todo.id, {...todo, todo: msg})
        setIsTodoEdit(false)
    }

    //only exists so we don't have to put this call back directly in the input's onChange
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
            type='checkbox'
            className=' cursor-pointer'
            checked={todo.completed}
            onChange={toggleCompleted}/>
            <input type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEdit ? "border-black/10 px-2": "border-transparent"}`}
            value={msg}
            readOnly={!isTodoEdit}
            onChange={(e) => setMsg(e.target.value)}
            />
            <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={() => {
                if(todo.completed) return
                if(isTodoEdit){
                    editToDo()
                }
                else setIsTodoEdit((prev) => !prev)
            }}
            disabled={todo.completed}>
                {isTodoEdit ? "📁": "✏️"}
            </button>
            <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default ToDoItem