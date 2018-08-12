import axios from "axios";

export const PHOTO_CHANGE = 'PHOTO_CHANGE';


const ROOT_URL = "http://localhost:8080";
    // const ROOT_URL = "";

export function newPhoto(photo) {

    const url = `${ROOT_URL}/changePhoto`;

    const request = axios.post(url , photo, {
        method: 'post',
        withCredentials: true
    });

    return {
        type: PHOTO_CHANGE,
        payload: request
    }
}