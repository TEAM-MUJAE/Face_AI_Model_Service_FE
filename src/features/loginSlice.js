import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    idText: '',
    passwordText: '',
    isLoading: false,
    isSecurityEntry: true,
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
        },
        setIsSecurityEntry: (state, action) => {
            state.isSecurityEntry = action.payload
        }
    }
});

export const { setIdText, setPasswordText, setIsLoading, setIsSecurityEntry } = loginSlice.actions;

export default loginSlice.reducer;