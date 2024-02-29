import { configureStore } from "@reduxjs/toolkit";
import compareCelebReducer from "./features/compareCelebSlice"



const store = configureStore({
    reducer: {
        compareCeleb: compareCelebReducer
    }
});

export default store;