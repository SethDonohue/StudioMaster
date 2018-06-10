import { FETCH_LOGIN, LOGIN_ERRORS, NEW_USER  } from "../actions/index";

function loginValidate(state = {}, action) {

    switch(action.type) {
        case FETCH_LOGIN:
            return action.payload;
        
        case LOGIN_ERRORS:
            return action.payload;
        
        case NEW_USER:
            return action.payload;
    }
    return state;

}

export default loginValidate;