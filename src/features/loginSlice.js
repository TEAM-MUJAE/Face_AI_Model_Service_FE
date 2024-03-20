import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    idText: '',
    passwordText: '',
    isLoading: false
};


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIdText: (state, action) => {
            state.idText = action.payload
        },
        setPasswordText: (state, action) => {
            state.passwordText = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const { setIdText, setPasswordText, setIsLoading } = loginSlice.actions;

export default loginSlice.reducer;