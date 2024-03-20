import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const memberDataSlice = createSlice({
    name: "memberData",
    initialState,
    reducers: {
        setRegisterResData: (state, {payload}) => {
            return payload;
        },
        setLoginResData: (state, {payload}) => {
            return payload;
        }

    }
});

export const { setRegisterResData, setLoginResData } = memberDataSlice.actions;

export default memberDataSlice.reducer;