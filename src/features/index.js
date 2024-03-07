import { combineReducers } from "redux";
import firstCompareReducer from "./firstCompareSlice"
import secondCompareReducer from "./secondCompareSlice";
import thirdCompareReducer from "./thirdCompareSlice";
import similarityReducer from "./similaritySlice";


const rootReducer = combineReducers({
    firstCompare: firstCompareReducer,
    secondCompare: secondCompareReducer,
    thirdCompare: thirdCompareReducer,
    similarity: similarityReducer
});

export default rootReducer;