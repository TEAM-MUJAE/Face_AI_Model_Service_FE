import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mostSimilarImage: require('../static/img/resource/croppedImage.png')
};

export const similarityImageSlice = createSlice({
    name: 'similarityImage',
    initialState,
    reducers: {
        setMostSimilarImage: (state, action) => {
            state.mostSimilarImage = action.payload
        }
    }
});

export const { setMostSimilarImage } = similarityImageSlice.actions;

export default similarityImageSlice.reducer;