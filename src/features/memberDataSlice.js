import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerResData: null,
    loginResData: null

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
        }

    }
});

export const { setRegisterResData, setLoginResData } = memberDataSlice.actions;

export default memberDataSlice.reducer;