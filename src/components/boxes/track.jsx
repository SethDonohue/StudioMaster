import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong } from '../../actions/audio_actions';

import Logo from '../../img/logos/StudioMaster-Site-Icon_Purple.png'

class Track extends Component {

    setTrack(){

        const track = {
            track: this.props.track,
            title: this.props.title
        }

        this.props.changeSong(track);
    }

    render() {

        const trackImage = this.props.trackImage ? this.props.trackImage : Logo;
        return(
            <div className="track"
            style={{backgroundImage:`url(${Logo})`}}
            onClick={this.setTrack.bind(this)}>
                <i className="far fa-play-circle track__play"></i>
                <div className="track__text-box">
                    <p className="track__title">{this.props.title}</p>
                    <p className="track__release">DATE</p>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeSong } ,dispatch);
}

export default connect(null, mapDispatchToProps)(Track);