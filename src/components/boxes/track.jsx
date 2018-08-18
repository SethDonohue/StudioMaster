import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong } from '../../actions/audio_actions';

import Logo from '../../img/placeholders/vinyl.jpeg';

class Track extends Component {

    state = {active: false};

    setTrack(){

        const track = {
            track: this.props.track,
            title: this.props.title
        }

        this.props.changeSong(track);
    }

    changeState(){
        if(this.state.active === true) this.setState({active: false});
        if(this.state.active === false) this.setState({active: true});
        console.log(this.state);
        
    }

    render() {

        if(this.state.active == false) 
        {
            return(
                <div className='track' onClick={this.changeState.bind(this)}>
                    <div className="track__image-container">
                        <img src={this.props.track.coverURL ? this.props.track.coverURL : Logo} alt="track-cover" className="track__image"/>
                    </div>
                    <div className="track__info">
                        <div className="track__title-container">
                            <h5 className="track__title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Title that is obnoxiously long and will take 2 lines but will it break?"}</h5>
                        </div>
                        <p className="track__artists">Artist Name</p>
                        <p className="track__length">Time code</p>
                        <p className="track__date">Release date</p>
                    </div>
                </div>
            )
        }
        else
        {
            return(
                <div className="track__active" onClick={this.changeState.bind(this)}>
                    <div className="track__active-title-container">
                        <h5 className="track__active-title">Title that also should be ridiculously large in order to take up 2 lines and eventually 3 to see if the design breaks. Little bit more...</h5>
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
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeSong } ,dispatch);
}

export default connect(null, mapDispatchToProps)(Track);