import { CHECK_USERNAME } from '../actions/index';

function checkUsername (state = false, action) {

    switch(action.type){

        case CHECK_USERNAME:
            console.log(action.payload);
            return action.payload.data;
    }

    return state;
}

export default checkUsername;