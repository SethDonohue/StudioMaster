import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearSong } from "../actions/audio_actions";

class Player extends Component {
    constructor(){
        super();


        this.seekButton = null

        //Set ref to seek button. Grants access to seek button through this.seekButton

        this.setSeekButton = (element) => {
            this.seekButton = element;
        }

        this.state = {
            isPlaying: true,
            duration: 0,
            durationRemaining: 0
        }
    }

    //Pause/Play function

    play(durInterval = null, seekInterval = null){
        if(this.state.isPlaying){
            this.props.song.sound.pause();
            this.setState({isPlaying: false});
            if(durInterval) clearInterval(durInterval);
            if(seekInterval) clearInterval(seekInterval);
            
        }
        if(!this.state.isPlaying){
            this.props.song.sound.play();
            this.setState({isPlaying: true});
        }

    }

    //Clears the song state

    clearSongState(){
        this.props.clearSong();
    }

    //Update durationRemaining 

    updateDuration(){
        if( this.props.song !== null&& this.props.song.sound.playing()){
            this.setState({
                durationRemaining: (this.props.song.sound.duration() - this.props.song.sound.seek()) 
            })
        }
    }

    //update seek button position

    updateSeekButton(seekInterval = null){
        if( this.props.song !== null && this.props.song.sound.playing()){
            this.seekButton.style.left = ((this.props.song.sound.seek() / this.state.duration) * 100) + '%';

        }
    }

    //End of playback, makes sure the player knows we aren't playing a sound anymore

    resetTrack(){
        if(!this.props.song.sound.playing()){
            this.setState({
                isPlaying: false
            })
        }
    }


    componentDidUpdate(){

        //If there's a song after update, once it's playing, update the duration local state.
        if(this.props.song){
            this.props.song.sound.on('play', () => {
                this.setState({
                    duration: this.props.song.sound.duration(),
                    isPlaying: true
                });
            })

            if(this.props.song.sound.playing() === 'true') {
                this.setState({
                    isPlaying: true
                })
            }

            this.seekButton.style.left = ((this.props.song.sound.seek() / this.state.duration) * 100) + '%';
        }
    }

    


    render(){



        if(this.props.song === null) {
            return <div></div>
        }
        else {

            const durInterval = setInterval(this.updateDuration.bind(this), 1000);
            const seekButtonInterval = setInterval(this.updateSeekButton.bind(this), 200);

            //track has finished playing, stop the sound, timer, and change icons
            if(this.state.durationRemaining < 0){
                this.props.song.sound.stop();
                clearInterval(durInterval);
                clearInterval(seekButtonInterval);
                this.resetTrack.bind(this);
            }
            
            return (
                <figure className="player">
                    <i className="fas fa-music player__track-icon" ></i>

                    <div className="player__controls">
                        {this.props.song.sound.playing() ? <i className="fas fa-pause player__play-icon" onClick={this.play.bind(this, durInterval, seekButtonInterval)}></i> : <i className="fas fa-play player__play-icon"
                        onClick={this.play.bind(this)}
                        ></i>}

                        <p className="player__track-name">{this.props.song ? this.props.song.track.title : ""}</p>

                        <div className="player__seek-bar" onClick={this.updateSeekButton.bind(this, seekButtonInterval)}>
                            <span className="player__seek-button" ref={this.setSeekButton}></span>
                        </div>

                        <p className="player__duration-remaining">{this.state.duration ? `${Math.floor((this.state.durationRemaining) / 60)}:${(Math.floor(this.state.durationRemaining) % 60) < 10 ? "0" : ""}${(Math.floor(this.state.durationRemaining) % 60)}` : '0'}</p>

                        <i className="fas fa-times player__close"
                        onClick={this.clearSongState.bind(this)}
                        ></i>
                    </div>

                </figure>
            )
        }
    }

}

function mapStateToProps ({ song }) {
    return ({ song });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ clearSong }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);