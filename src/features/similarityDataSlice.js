import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mostSimilarPartText: ''
};

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
        },
        setMostSimilarPartText: (state, {payload}) => {
            state.mostSimilarPartText = payload;
        }
    }
});

export const { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData, setMostSimilarPartText } = similarityDataSlice.actions;

export default similarityDataSlice.reducer;