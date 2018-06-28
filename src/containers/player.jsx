import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearSong } from "../actions/audio_actions";

class Player extends Component {
    constructor(){
        super();

        this.updateDuration.bind(this);

        this.state = {
            isPlaying: true,
            duration: 0,
            durationRemaining: 0
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

    //Clears the song state

    clearSongState(){
        this.props.clearSong();
    }

    //Update durationRemaining 

    updateDuration(){
        console.log('updating duration!!!!');
        if(this.state.isPlaying){
            this.setState({
                durationRemaining: (this.props.song.sound.duration() - this.props.song.sound.seek()) 
            })
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(){
        if(this.props.song){
            this.props.song.sound.on('play', () => {
                this.setState({
                    duration: this.props.song.sound.duration()
                });
                console.log(this.state.duration);
                console.log(this.props.song.sound.seek());
            })

            if(this.props.song.sound.playing() === 'true') {
                this.setState({
                    isPlaying: true
                })
            }
        }
    }

    


    render(){



        if(this.props.song === null) {
            return <div></div>
        }
        else {

            const interval = setInterval(this.updateDuration.bind(this), 1000);
            
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

                        <p className="player__duration-remaining">{this.state.duration ? `${Math.floor((this.state.durationRemaining) / 60)}:${(Math.floor(this.state.durationRemaining) % 60)}` : '0'}</p>

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