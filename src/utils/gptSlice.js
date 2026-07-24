import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toogleswitch: false
    },
    reducers:{
        updateGptToogle: (state,action) => {
            state.toogleswitch = action.payload;
        }
    }
});

export const {updateGptToogle} = gptSlice.actions;//export actions
export default gptSlice.reducer;//epxport reducer