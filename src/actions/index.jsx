import axios from "axios";

export const FETCH_LOGIN = "FETCH_LOGIN";
export const LOGIN_ERRORS = "LOGIN_ERRORS";
export const NEW_USER = "NEW_USER";

const ROOT_URL = "http://localhost:2000"

export function fetchLogin (credentials){

    const url = `${ROOT_URL}/login`

    const request = axios.post(url, credentials);

    return {
        type: FETCH_LOGIN,
        payload: request
    }
        

    
}

export function newUser (values){
    const url = `${ROOT_URL}/newUser`

    const request = axios.post(url, values);

    return {
        type: NEW_USER,
        payload: request
    }
}