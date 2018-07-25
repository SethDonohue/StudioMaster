import { CHECK_USERNAME } from '../actions/index';

function checkUsername (state = false, action) {

    switch(action.type){

        case CHECK_USERNAME:
            return action.payload.data;

        default:
            return state;
    }
}

export default checkUsername;