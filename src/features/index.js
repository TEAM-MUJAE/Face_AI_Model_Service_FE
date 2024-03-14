import { combineReducers } from "redux";
import firstCompareReducer from "./firstCompareSlice"
import secondCompareReducer from "./secondCompareSlice";
import thirdCompareReducer from "./thirdCompareSlice";
import similarityDataReducer from "./similarityDataSlice";
import similarityRankReducer from "./similarityRankSlice";


const rootReducer = combineReducers({
    firstCompare: firstCompareReducer,
    secondCompare: secondCompareReducer,
    thirdCompare: thirdCompareReducer,
    similarityData: similarityDataReducer,
    similarityRank: similarityRankReducer,
});

export default rootReducer;