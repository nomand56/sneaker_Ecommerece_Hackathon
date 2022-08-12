import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlicer";

const store = configureStore({
    reducer: {
        TodoData: TodoReducer
    }
});

export default store;