import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {count: 0, isDragging: false},
        reducers: {
            add: (state, action) => {
                state.count += action.payload;
            },
            remove: (state, action) => {
                state.count -= action.payload
            },
            clear: (state, action) => {
                state.count = 0
            },
            toggle: ((state, action) => {
                state.isDragging = action.payload;
            })
        }

    }
)
export const { add, remove, clear} = counterSlice.actions;

export default counterSlice.reducer;