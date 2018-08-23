import {ROOT_URL} from "./index";
import axios from 'axios';

export const CHANGE_SONG = "CHANGE_SONG";
export const CLEAR_SONG = "CLEAR_SONG";
export const NEW_TRACK = 'NEW_TRACK';
export const FETCH_TRACKS_PROFILE = 'FETCH_TRACKS_PROFILE';


export function changeSong(track){
    return {
        type: CHANGE_SONG,
        payload: track
    }
}

export function clearSong(){
    return {
        type: CLEAR_SONG
    }
}

export function newTrack(track){

    const url = `${ROOT_URL}/newTrack`;

    axios.post(url, track);

    return {
        type: NEW_TRACK,
        
    }
}

export function fetchProfileTracks(id){
    const url = `${ROOT_URL}/fetchProfileTracks/${id}`;

    const request = axios.get(url);

    return {
        type: FETCH_TRACKS_PROFILE,
        payload: request
    }
}