import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedImageIndex: null,
    selectedFirstImage: require('../static/img/resource/uploadForm.png'),
    selectedSecondImage: require('../static/img/resource/uploadForm.png'),
    selectedThirdImage: require('../static/img/resource/uploadForm.png'),
    firstImageUrl: '',
    secondImageUrl: '',
    thirdImageUrl: '',
    isFirstSelected: false,
    isSecondSelected: false,
    isThirdSelected: false,
    isLoading: false
};

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        setSelectedImageIndex: (state, {payload}) => {
            state.selectedImageIndex = payload
        },
        setSelectedFirstImage: (state, {payload}) => {
            console.log("1번 이미지 슬라이스의 selectedImage : ", state.selectedFirstImage)
            console.log("1번 이미지 슬라이스의 payload : ", payload)
            state.selectedFirstImage = payload;
        },
        setSelectedSecondImage: (state, {payload}) => {
            console.log("2번 이미지 슬라이스의 selectedImage : ", state.selectedSecondImage)
            console.log("2번 이미지 슬라이스의 payload : ", payload)
            state.selectedSecondImage = payload;
        },
        setSelectedThirdImage: (state, {payload}) => {
            console.log("3번 이미지 슬라이스의 selectedImage : ", state.selectedThirdImage)
            console.log("3번 이미지 슬라이스의 payload : ", payload)
            state.selectedThirdImage = payload;
        },
        setFirstImageUrl: (state, {payload}) => {
            state.firstImageUrl = payload;
        },
        setSecondImageUrl: (state, {payload}) => {
            state.secondImageUrl = payload;
        },
        setThirdImageUrl: (state, {payload}) => {
            state.thirdImageUrl = payload;
        },
        setIsFirstSelected: (state, {payload}) => {
            state.isFirstSelected = payload;
        },
        setIsSecondSelected: (state, {payload}) => {
            state.isSecondSelected = payload;
        },
        setIsThirdSelected: (state, {payload}) => {
            state.isThirdSelected = payload;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        }
    }
});

export const { setSelectedImageIndex, setSelectedFirstImage, setSelectedSecondImage, setSelectedThirdImage, setFirstImageUrl, setSecondImageUrl, setThirdImageUrl, setIsFirstSelected, setIsSecondSelected, setIsThirdSelected, setIsLoading  } = compareSlice.actions;

export default compareSlice.reducer;