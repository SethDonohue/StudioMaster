import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong } from '../../actions/audio_actions';

class Track extends Component {

    setTrack(){

        const track = {
            track: this.props.track,
            title: this.props.title
        }

        this.props.changeSong(track);
    }

    render() {
        return(
            <div className="track"
            onClick={this.setTrack.bind(this)}>
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