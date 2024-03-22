import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCheckedFullAgree: false,
    isCheckedTermsAgree: false,
    isCheckedPrivacyAgree: false,
    idText: '',
    passwordText: '',
    passwordCheckText: '',
    nameText: '',
    emailText: '',
    phoneText: '',
    idTextValid: true,
    passwordTextValid: true,
    passwordCheckTextValid: true,
    nameTextValid: true,
    emailTextValid: true,
    phoneTextValid: true,
    isValidationEnabled: false,
    isSecurityEntry: true,
    isLoading: false,
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
        setSignIdText: (state, action) => {
            state.idText = action.payload
        },
        setSignPasswordText: (state, action) => {
            state.passwordText = action.payload
        },
        setSignPasswordCheckText: (state, action) => {
            state.passwordCheckText = action.payload
        },
        setSignNameText: (state, action) => {
            state.nameText = action.payload
        },
        setSignEmailText: (state, action) => {
            state.emailText = action.payload
        },
        setSignPhoneText: (state, action) => {
            state.phoneText = action.payload
        },
        setIdTextValid: (state, action) => {
            state.idTextValid = action.payload
        },
        setPasswordTextValid: (state, action) => {
            state.passwordTextValid = action.payload
        },
        setPasswordCheckTextValid: (state, action) => {
            state.passwordCheckTextValid = action.payload
        },
        setNameTextValid: (state, action) => {
            state.nameTextValid = action.payload
        },
        setEmailTextValid: (state, action) => {
            state.emailTextValid = action.payload
        },
        setPhoneTextValid: (state, action) => {
            state.phoneTextValid = action.payload
        },
        setIsValidationEnabled: (state, action) => {
            state.isValidationEnabled = action.payload
        },
        setIsSecurityEntry: (state, action) => {
            state.isSecurityEntry = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    }
});

export const { setIsCheckedFullAgree, setIsCheckedTermsAgree, setIsCheckedPrivacyAgree, setSignIdText, setSignPasswordText, setSignPasswordCheckText, setSignNameText, setSignEmailText, setSignPhoneText, setIdTextValid, setPasswordTextValid, setPasswordCheckTextValid, setNameTextValid, setEmailTextValid, setPhoneTextValid, setIsValidationEnabled, setIsSecurityEntry, setIsLoading } = signUpSlice.actions;

export default signUpSlice.reducer;