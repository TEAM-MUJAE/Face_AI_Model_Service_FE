import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedImageIndex: null,
    selectedImageUri: null
};

export const compareCelebSlice = createSlice({
    name: 'compareCeleb',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload
        },
        setSelectedImageUri: (state, action) => {
            state.selectedImageUri = action.payload
        }
    }
});

export const { setSelectedImageIndex, setSelectedImageUri } = compareCelebSlice.actions;

export default compareCelebSlice.reducer;