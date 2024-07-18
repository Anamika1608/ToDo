import { createContext,useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext({
    todos : [
        {
            id: uuidv4(),
            todo : "Learn react",
            completed: false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{},
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;


