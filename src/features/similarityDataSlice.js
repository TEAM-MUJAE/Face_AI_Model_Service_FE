import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAnother: false,
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
        setIsAnother: (state, {payload}) => {
            state.isAnother = payload;
        }
    }
});

export const { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData, setIsAnother } = similarityDataSlice.actions;

export default similarityDataSlice.reducer;