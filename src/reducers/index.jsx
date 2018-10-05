import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from "./reducer_accounts";
import checkLoginReducer from "./reducer_check-login";
import checkUsernameReducer from "./reducer_check-username";
import userProfile from "./reducer_user-profile";
import photoReducer from "./reducer_photo";
import instrumentAndGenreReducer from "./reducer_instruments-genres"; 
import albumReducer from "./reducer_albums";

import tracksReducer from "./reducer_all-tracks";
import newSong from "./reducer_song"; 

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer,
    userProfile: userProfile,
    checkLogin: checkLoginReducer,
    checkUsername: checkUsernameReducer,
    allTracks: tracksReducer,
    song: newSong,
    albums: albumReducer,
    photo: photoReducer,
    instrumentsAndGenres: instrumentAndGenreReducer

});

export default rootReducer;