//to create slice we mainly need 3 things: name, initialState, reducers
//initialState is defined of the store
//here we used an arry as the initial state



import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello", completed: false }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    //in the reducer section we can create as many as key value pairs
    //we key value pair defines a function
    //we can give the defination of the funtion here or in another file and call the method here inside the reducer

    reducers: {
        //in each function we get access of two parameters: state and action
        //in state we get the updated state value of the store
        //in action we mainly get action.payload

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
        },
        toggleCompleteTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {
                ...todo, completed: !todo.completed
            } : todo)
        }
    }
})


//we are exporting all the reducers one by one to use then inside the components
export const { addTodo, removeTodo, updateTodo, toggleCompleteTodo } = todoSlice.actions

//we export the main source of all the reducers to put it inside the store 
export default todoSlice.reducer 
