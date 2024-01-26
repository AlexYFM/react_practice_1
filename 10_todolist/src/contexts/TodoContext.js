import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //templating out what our context should hold
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            complete: false
        },
    ],
    // CRUD operations essentially
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider