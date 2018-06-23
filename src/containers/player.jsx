import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearSong } from "../actions/index";

import {Howl,  Howler} from "howler";

class Player extends Component {

    play(){
        console.log(this.props.song)
    }

    clearSongState(){
        this.props.clearSong();
    }


    render(){

        if(this.props.song === null) {
            return <div></div>
        }

        return (
            <figure className="player">
                <i className="fas fa-music player__track-icon" ></i>

                <div className="player__controls">
                    <i className="fas fa-play player__play-icon"
                    onClick={this.play.bind(this)}
                    ></i>

                    <p className="player__track-name">{this.props.song ? this.props.song.title : ""}</p>

                    <i className="fas fa-times player__close"
                    onClick={this.clearSongState.bind(this)}
                    ></i>
                </div>

            </figure>
        )
    }

}

function mapStateToProps ({ song }) {
    return ({ song });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ clearSong }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);