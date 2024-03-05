import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedImageIndex: null,
    selectedImage: require('../static/img/resource/uploadForm.png')
};


export const secondCompareSlice = createSlice({
    name: 'secondCompare',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload
        },
        setSelectedImage: (state, action) => {
            console.log("2번 이미지 슬라이스의 selectedImage : ", state.selectedImage)
            console.log("2번 이미지 슬라이스의 payload : ", action.payload)
            
            state.selectedImage = action.payload;
        }
    }
});

export const { setSelectedImageIndex, setSelectedImage } = secondCompareSlice.actions;

export default secondCompareSlice.reducer;