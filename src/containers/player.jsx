import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearSong } from "../actions/audio_actions";

class Player extends Component {
    constructor(){
        super();

        // Controls the pause/play icons
        this.state = {
            isPlaying: true
        }
    }

    //Pause/Play function

    play(){
        if(this.state.isPlaying){
            this.props.song.sound.pause();
            this.setState({isPlaying: false});
        }
        if(!this.state.isPlaying){
            this.props.song.sound.play();
            this.setState({isPlaying: true});
        }

    }

    //Clears all 

    clearSongState(){
        this.props.clearSong();
    }

    // componentDidUpdate(){
    //     if(this.props.song !== null && this.props.song.sound !== null) {
    //         this.props.song.sound.play();
    //     }
    //     console.log(this.state.isPlaying)
    // }


    render(){

        if(this.props.song === null) {
            return <div></div>
        }
        else {

            console.log(this.props.song);

            
            
            return (
                <figure className="player">
                    <i className="fas fa-music player__track-icon" ></i>

                    <div className="player__controls">
                        {this.state.isPlaying ? <i className="fas fa-pause player__play-icon" onClick={this.play.bind(this)}></i> : <i className="fas fa-play player__play-icon"
                        onClick={this.play.bind(this)}
                        ></i>}

                        <p className="player__track-name">{this.props.song ? this.props.song.track.title : ""}</p>

                        <div className="player__seek-bar">
                            <span className="player__seek-button"></span>
                        </div>

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