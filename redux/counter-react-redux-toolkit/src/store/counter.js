import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterValue: 0 },
    reducers: {
        increment: (state) => {
            state.counterValue++;
        },
        decrement: (state) => {
            state.counterValue--;
        },
        add: (state, action) => {
            state.counterValue += Number(action.payload);
        },
        subtract: (state, action) => {
            state.counterValue -= Number(action.payload);
        }
    }
});


export const counterActions = counterSlice.actions;

export default counterSlice;