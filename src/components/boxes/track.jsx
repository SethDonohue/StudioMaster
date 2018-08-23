import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong } from '../../actions/audio_actions';

import Logo from '../../img/placeholders/vinyl.jpeg';

class Track extends Component {

    setTrack(){

        const track = {
            id: this.props.track.id,
            track: this.props.track.trackURL,
            title: this.props.track.trackTitle
        }

        this.props.changeSong(track);
    }

    changeState(){
        if(this.state.active === true) this.setState({active: false});
        if(this.state.active === false) this.setState({active: true});
        console.log(this.state);
        
    }

    render() {

        if(this.props.song && this.props.song.track.id === this.props.track.id)
        {
            console.log(this.props.song)
            return(
                <div className="track__active">
                    <div className="track__active-title-container">
                        <h5 className="track__active-title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Track Title"}</h5>
                    </div>
                    <p className="track__active-billboard">Billboard</p>
                    <div className="track__active-metrics">
                        <p className="track__active-info">Listens</p>
                        <p className="track__active-info">Favorites</p>
                    </div>
                    <div className="track__active-actions">
                        <i className="fas fa-plus track__active-icons"></i>
                        <i className="fas fa-list track__active-icons"></i>
                        <i className="fab fa-itunes-note track__active-icons"></i>
                    </div>
                </div>
            )
        }

        else 
        {
            return(
                <div className='track' onClick={this.setTrack.bind(this)}>
                    <div className="track__image-container">
                        <img src={this.props.track.coverURL ? this.props.track.coverURL : Logo} alt="track-cover" className="track__image"/>
                    </div>
                    <div className="track__info">
                        <div className="track__title-container">
                            <h5 className="track__title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Track Title"}</h5>
                        </div>
                        <p className="track__artists">Artist Name</p>
                        <p className="track__length">Time code</p>
                        <p className="track__date">Release date</p>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps({ song }){
    return { song }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeSong } ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);