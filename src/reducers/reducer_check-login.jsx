import { CHECK_EMAIL } from '../actions/index';

function checkLogin (state = false, action) {

    switch(action.type){

        case CHECK_EMAIL:
            return action.payload.data;

        default:
            return state;
    }
}

export default checkLogin;