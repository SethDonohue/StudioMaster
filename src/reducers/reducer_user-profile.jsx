import { GET_ACCOUNT_INFO } from '../actions/index';

function getAccountInfo(state = null, action) {

    switch(action.type){
        case GET_ACCOUNT_INFO:
            return action.payload.data;
        default:
            return state;
    }

}

export default getAccountInfo;

