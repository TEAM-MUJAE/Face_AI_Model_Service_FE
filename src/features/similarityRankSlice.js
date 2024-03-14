import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mostSimilarImage: require('../static/img/resource/croppedImage.png'),
    currentRankPath: '',
    mostSimilarTotalScore: 0,
    mostSimilarEyeScore: 0,
    mostSimilarNoseScore: 0,
    mostSimilarMouthScore: 0
};

export const similarityRankSlice = createSlice({
    name: 'similarityRank',
    initialState,
    reducers: {
        setMostSimilarImage: (state, action) => {
            state.mostSimilarImage = action.payload
        },
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

export const { setMostSimilarImage, setCurrentRankPath, setMostSimilarEyeScore, setMostSimilarNoseScore, setMostSimilarMouthScore } = similarityRankSlice.actions;

export default similarityRankSlice.reducer;