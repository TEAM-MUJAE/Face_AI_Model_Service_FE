import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const similarityDataSlice = createSlice({
    name: "similarityData",
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
    }
});

export const { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } = similarityDataSlice.actions;

export default similarityDataSlice.reducer;