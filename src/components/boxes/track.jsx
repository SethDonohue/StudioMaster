import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong } from '../../actions/audio_actions';

import Logo from '../../img/placeholders/vinyl.jpeg';

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
            <div className='track'>
                <div className="track__image-container">
                    <img src={this.props.track.coverURL ? this.props.track.coverURL : Logo} alt="track-cover" className="track__image"/>
                </div>
                <div className="track__info">
                    <h5 className="track__title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Title"}</h5>
                    <p className="track__artists">Artist Name</p>
                    <p className="track__length">Time code</p>
                    <p className="track__date">Release date</p>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeSong } ,dispatch);
}

export default connect(null, mapDispatchToProps)(Track);