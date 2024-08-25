//each application have only one store which is called single source of truth
//we store values in the store
//to update the values in the we store the store needs some reducers, otherwise the values can't be mutated
//so after this we create reducers aka features aka splice in the feature folder

import { configureStore } from "@reduxjs/toolkit"

import todoReducer from "../features/todo/todoSlice";

export const store=configureStore({
    reducer: todoReducer
});