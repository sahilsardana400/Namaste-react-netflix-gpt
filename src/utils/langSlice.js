import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState:{
        currentLang: 'en'
    },
    reducers: {
        updateLanguage: (state,action) => {
            state.currentLang = action.payload;
        }
    }
});

export const {updateLanguage} = langSlice.actions;
export default langSlice.reducer;