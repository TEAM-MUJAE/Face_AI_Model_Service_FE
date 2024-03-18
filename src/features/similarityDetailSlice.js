import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentRankPath: '',
    mostSimilarTotalScore: 0,
    mostSimilarEyeScore: 0,
    mostSimilarNoseScore: 0,
    mostSimilarMouthScore: 0
};

export const similarityDetailSlice = createSlice({
    name: 'similarityDetail',
    initialState,
    reducers: {
        setCurrentRankPath: (state, action) => {
            state.currentRankPath = action.payload
        },
        setMostSimilarEyeScore: (state, action) => {
            state.mostSimilarEyeScore = action.payload
        },
        setMostSimilarNoseScore: (state, action) => {
            state.mostSimilarNoseScore = action.payload
        },
        setMostSimilarMouthScore: (state, action) => {
            state.mostSimilarMouthScore = action.payload
        }
    }
});

export const { setCurrentRankPath, setMostSimilarEyeScore, setMostSimilarNoseScore, setMostSimilarMouthScore } = similarityDetailSlice.actions;

export default similarityDetailSlice.reducer;