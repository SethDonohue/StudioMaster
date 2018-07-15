import { Howl } from "howler";

import { CHANGE_SONG, CLEAR_SONG } from "../actions/audio_actions";

function NewSong (state = null, action) {

    switch(action.type){

        case CHANGE_SONG:
            //stop a sound that if currently playing.
            if(state != null) state.sound.stop();

            //define a new sound to be played and pass it to reducer with track info

            
            const sound = new Howl({
                src: [action.payload.track],
                autoplay: true
            });
            
            
            // function getDuration(){
            //     return sound.duration();
                
            // }
            

            const master = {
                sound,
                track: action.payload
            }
            return master;

        case CLEAR_SONG:

            //stop a sound that if currently playing.
            if(state != null) state.sound.stop();

            return null;

        default: 

            return state;
    }
};

export default NewSong;