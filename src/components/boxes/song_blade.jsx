import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeSong } from "../../actions/audio_actions";

class SongBlade extends Component {

    setTrack(){

        const track = {
            track: this.props.track,
            title: this.props.title
        }

        this.props.changeSong(track);
    }

    render(){
        return(
            <div className="blade"
            onClick={this.setTrack.bind(this)}
            >
                <i className="fas fa-music blade__icon" ></i>
                <p className="blade__title">{this.props.title}</p>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeSong } ,dispatch);
}

export default connect(null, mapDispatchToProps)(SongBlade);