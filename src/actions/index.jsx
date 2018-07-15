import axios from "axios";

export const FETCH_LOGIN = "FETCH_LOGIN";
export const LOGIN_ERRORS = "LOGIN_ERRORS";
export const NEW_USER = "NEW_USER";
export const CHECK_EMAIL ="CHECK_EMAIL";
export const CHECK_USERNAME ="CHECK_USERNAME";
export const GET_ACCOUNT_INFO = "GET_INFO";


const ROOT_URL = "http://localhost:8080"

export function fetchLogin (credentials){

    const url = `${ROOT_URL}/login`;

    const request = axios.post(url, credentials);

    return {
        type: FETCH_LOGIN,
        payload: request
    }
}

export function newUser (values){

    const url = `${ROOT_URL}/newUser`;

    const request = axios.post(url, values);

    return {
        type: NEW_USER,
        payload: request
    }
}

export function queryEmail(email) {
    const url = `${ROOT_URL}/checkEmail`;

    const request = axios.post(url, email);

    return {
        type: CHECK_EMAIL,
        payload: request
    }
}

export function queryUsername(username) {
    const url = `${ROOT_URL}/checkUsername`;

    const request = axios.post(url, username);

    return {
        type: CHECK_USERNAME,
        payload: request
    }
}

export function getAccountInfo(id){
    const url = `${ROOT_URL}/getAccountInfo/${id}`;

    const request = axios.get(url)

    return {
        type: GET_ACCOUNT_INFO,
        payload: request
    }
}