import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerResData: null,
    loginResData: null,
    registerErrorMessages: null,
};

const memberDataSlice = createSlice({
    name: "memberData",
    initialState,
    reducers: {
        setRegisterResData: (state, {payload}) => {
            state.registerResData = payload;
        },
        setLoginResData: (state, {payload}) => {
            state.loginResData = payload;
        },
        setRegisterErrorMessages: (state, {payload}) => {
            state.registerErrorMessages = payload;
        }
    }
});

export const { setRegisterResData, setLoginResData, setRegisterErrorMessages } = memberDataSlice.actions;

export default memberDataSlice.reducer;