import {createSlice} from '@reduxjs/toolkit';
interface CounterState {
  value: number;
}

const intialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: intialState,
    reducers: {
        increment: (state) => {
        state.value += 1;
        },
        decrement: (state) => {
        state.value -= 1;
        },
        reset: (state) => {
        state.value = 0;
        },
    },
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;