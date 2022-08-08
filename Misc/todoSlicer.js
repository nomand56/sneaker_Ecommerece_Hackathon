import { createSlice } from "@reduxjs/toolkit";

const TodoSlicer = createSlice({
    name: "Todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTask: (state, action) => {
            const todo = {
                id: Math.floor(Math.random() * 123),
                Task: action.payload
            };
            // console.log(state)
            state.todos.push(todo);
        },
        deleteTask: (state, action) => {


            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },
        updateTask: (state, action) => {
            console.log("item",




                action.payload)
            state.todos[action.payload.i].Task = action.payload.Task;
        }
    }
});
export const { addTask, deleteTask, UpdateTask } = TodoSlicer.actions;
export default TodoSlicer.reducer;
