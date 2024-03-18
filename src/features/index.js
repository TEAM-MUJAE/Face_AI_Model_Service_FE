import { combineReducers } from "redux";
import firstCompareReducer from "./firstCompareSlice"
import secondCompareReducer from "./secondCompareSlice";
import thirdCompareReducer from "./thirdCompareSlice";
import similarityDataReducer from "./similarityDataSlice";
import similarityRankReducer from "./similarityDetailSlice";
import signupReducer from "./signUpSlice";
import titleReducer from "./titleSlice";


const rootReducer = combineReducers({
    title: titleReducer,
    firstCompare: firstCompareReducer,
    secondCompare: secondCompareReducer,
    thirdCompare: thirdCompareReducer,
    similarityData: similarityDataReducer,
    similarityRank: similarityRankReducer,
    signup: signupReducer,
});

export default rootReducer;