import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedImageIndex: null,
    selectedImage: require('../static/img/resource/uploadForm.png')
};


export const thirdCompareSlice = createSlice({
    name: 'thirdCompare',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload
        },
        setSelectedImage: (state, action) => {
            console.log("3번 이미지 슬라이스의 selectedImage : ", state.selectedImage)
            console.log("3번 이미지 슬라이스의 payload : ", action.payload)
            
            state.selectedImage = action.payload;
        }
    }
});

export const { setSelectedImageIndex, setSelectedImage } = thirdCompareSlice.actions;

export default thirdCompareSlice.reducer;