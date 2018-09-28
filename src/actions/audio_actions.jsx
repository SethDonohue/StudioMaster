import {ROOT_URL} from "./index";
import axios from 'axios';

export const CHANGE_SONG = "CHANGE_SONG";
export const CLEAR_SONG = "CLEAR_SONG";
export const NEW_TRACK = 'NEW_TRACK';
export const NEW_ALBUM = 'NEW_ALBUM';
export const FETCH_TRACKS_PROFILE = 'FETCH_TRACKS_PROFILE';
export const FETCH_TRACKS_ALL = 'FETCH_TRACKS_ALL';
export const DELETE_TRACKS = "DELETE_TRACKS";


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

export function newAlbum(tracks){

    const url = `${ROOT_URL}/newAlbum`;

    axios.post(url, {tracks});

    return {
        type: NEW_ALBUM
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

export function fetchAllTracks(id){
    const url = `${ROOT_URL}/fetchAllTracks/${id}`;

    const request = axios.get(url);

    return {
        type: FETCH_TRACKS_ALL,
        payload: request
    }
}

export function deleteTracks(tracks, id){
    const url = `${ROOT_URL}/deleteTracks/${id}`;

    const request = axios.post(url, {tracks}, {
        method: 'post',
        withCredentials: true
    })

    return {
        type: DELETE_TRACKS,
        payload: request
    }
}