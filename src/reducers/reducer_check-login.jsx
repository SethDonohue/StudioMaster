import { CHECK_EMAIL } from '../actions/index';

function checkLogin (state = false, action) {

    switch(action.type){

        case CHECK_EMAIL:
            console.log(action.payload);
            return action.payload.data;
    }

    return state;
}

export default checkLogin;