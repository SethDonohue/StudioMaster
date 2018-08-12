import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from "./reducer_accounts";
import checkLoginReducer from "./reducer_check-login";
import checkUsernameReducer from "./reducer_check-username";
import userProfile from "./reducer_user-profile";
import photoReducer from "./reducer_photo";

import newSong from "./reducer_song"; 

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer,
    userProfile: userProfile,
    checkLogin: checkLoginReducer,
    checkUsername: checkUsernameReducer,
    song: newSong,
    photo: photoReducer
});

export default rootReducer;