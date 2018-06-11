import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from "./reducer_accounts";
import checkLoginReducer from "./reducer_check-login";

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer,
    checkLogin: checkLoginReducer
});

export default rootReducer;