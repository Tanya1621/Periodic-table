import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../services/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})