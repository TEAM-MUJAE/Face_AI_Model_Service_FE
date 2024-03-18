import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCheckedFullAgree: false,
    isCheckedTermsAgree: false,
    isCheckedPrivacyAgree: false,
};


export const signUpSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setIsCheckedFullAgree: (state, action) => {
            state.isCheckedFullAgree = action.payload
        },
        setIsCheckedTermsAgree: (state, action) => {
            state.isCheckedTermsAgree = action.payload
        },
        setIsCheckedPrivacyAgree: (state, action) => {
            state.isCheckedPrivacyAgree = action.payload
        },
    }
});

export const { setIsCheckedFullAgree, setIsCheckedTermsAgree, setIsCheckedPrivacyAgree } = signUpSlice.actions;

export default signUpSlice.reducer;