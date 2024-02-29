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

export const compareCelebSlice = createSlice({
    name: 'compareCeleb',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload
        },
        setSelectedImage: (state, action) => {
            console.log("슬라이스1",state.selectedImage)
            console.log("슬라이스2",action.payload)
            
            state.selectedImage = action.payload;
        }
    }
});

export const { setSelectedImageIndex, setSelectedImage } = compareCelebSlice.actions;

export default compareCelebSlice.reducer;