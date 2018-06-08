import axios from "axios";

export const FETCH_LOGIN = "FETCH_LOGIN"
export const LOGIN_ERRORS = "LOGIN_ERRORS"

const ROOT_URL = "http://localhost:2000"

export function fetchLogin (credentials){

    const url = `${ROOT_URL}/login`

    const request = axios.post(url, credentials);

    return {
        type: FETCH_LOGIN,
        payload: request
    }
        

    
}