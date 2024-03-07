import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const similaritySlice = createSlice({
    name: "similarity",
    initialState,
    reducers: {
        setSimilarityCelebData: (state, {payload}) => {
            return payload;
        },
        setSimilarityOtherData: (state, {payload}) => {
            return payload;
        },
        setSimilarityPeopleData: (state, {payload}) => {
            return payload;
        }
    },
});

export const { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } = similaritySlice.actions;

export default similaritySlice.reducer;