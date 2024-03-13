import { combineReducers } from "redux";
import firstCompareReducer from "./firstCompareSlice"
import secondCompareReducer from "./secondCompareSlice";
import thirdCompareReducer from "./thirdCompareSlice";
import similarityReducer from "./similarityDataSlice";
import similarityImageReducer from "./similarityImageSlice";


const rootReducer = combineReducers({
    firstCompare: firstCompareReducer,
    secondCompare: secondCompareReducer,
    thirdCompare: thirdCompareReducer,
    similarity: similarityReducer,
    similarityImage: similarityImageReducer,
});

export default rootReducer;