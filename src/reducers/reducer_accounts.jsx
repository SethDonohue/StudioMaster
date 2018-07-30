import { FETCH_LOGIN, LOGIN_ERRORS, NEW_USER, CHECK_LOGIN_SESSION, SIGN_OFF } from "../actions/index";

function loggedIn(state = null, action) {

    switch(action.type) {
        case FETCH_LOGIN:
            return action.payload;
        
        case LOGIN_ERRORS:
            return action.payload;
        
        case NEW_USER:
            return action.payload;

        case CHECK_LOGIN_SESSION:
            return action.payload;

        case SIGN_OFF:
            return action.payload;

        default:
            return state;
    }

}

export default loggedIn;