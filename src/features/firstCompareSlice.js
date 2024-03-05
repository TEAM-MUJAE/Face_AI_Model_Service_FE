import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedImageIndex: null,
    selectedImage: require('../static/img/resource/uploadForm.png')
};

// const initialState = {
//     selectedImageIndex: null,
//     selectedImage: {
//         uri: 'src/static/img/resource/uploadform.png',
        
//         type: 'uri'
//     }
// };

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
        }
    }
});

export const { setSelectedImageIndex, setSelectedImage } = firstCompareSlice.actions;

export default firstCompareSlice.reducer;