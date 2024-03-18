import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    beforeTitleText: '',
    changedTitleText: '',
};


export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setBeforeTitleText: (state, action) => {
            state.changedTitleText = action.payload
        },
        setChangedTitleText: (state, action) => {
            state.changedTitleText = action.payload
        },
    }
});

export const { setBeforeTitleText, setChangedTitleText } = titleSlice.actions;

export default titleSlice.reducer;