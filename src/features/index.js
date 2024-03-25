import { combineReducers } from "redux";
import compareReducer from "./compareSlice"
import similarityDataReducer from "./similarityDataSlice";
import similarityRankReducer from "./similarityDetailSlice";
import signupReducer from "./signUpSlice";
import loginReducer from "./loginSlice";
import memberDataReducer from "./memberDataSlice";


const rootReducer = combineReducers({
    compare: compareReducer,
    similarityData: similarityDataReducer,
    similarityRank: similarityRankReducer,
    memberData: memberDataReducer,
    signup: signupReducer,
    login: loginReducer
});

export default rootReducer;