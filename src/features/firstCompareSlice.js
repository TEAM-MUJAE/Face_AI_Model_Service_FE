import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedImageIndex: null,
    selectedImage: require('../static/img/resource/uploadForm.png'),
    isLoading: false,
    isFirstSelected: false
};

export const firstCompareSlice = createSlice({
    name: 'firstCompare',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload
        },
        setSelectedImage: (state, action) => {
            console.log("1번 이미지 슬라이스의 selectedImage : ", state.selectedImage)
            console.log("1번 이미지 슬라이스의 payload : ", action.payload)
            
            state.selectedImage = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsFirstSelected: (state, action) => {
            state.isFirstSelected = action.payload;
        }
    }
});

export const { setSelectedImageIndex, setSelectedImage, setIsLoading, setIsFirstSelected } = firstCompareSlice.actions;

export default firstCompareSlice.reducer;