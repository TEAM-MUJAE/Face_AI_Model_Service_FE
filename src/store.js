import { configureStore } from "@reduxjs/toolkit";


import firstCompareReducer from "./features/firstCompareSlice"
import secondCompareReducer from "./features/secondCompareSlice"
import thirdCompareReducer from "./features/thirdCompareSlice"



const store = configureStore({
    reducer: {
        firstCompare: firstCompareReducer,
        secondCompare: secondCompareReducer,
        thirdCompare: thirdCompareReducer
    }
});

export default store;