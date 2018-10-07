import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSong, addFavorite, deleteFavorite } from '../../actions/audio_actions';

import Logo from '../../img/placeholders/vinyl.jpeg';

class Track extends Component {

    state = {
        active : false,
        deleteWindow : false,
        menuShow: false,
    }

    setTrack(){

        const track = {
            id: this.props.track.id,
            track: this.props.track.trackURL,
            title: this.props.track.trackTitle
        }

        this.props.changeSong(track);
    }

    changeState(view){
        console.log('hello')

        switch(view){
            case null:
                console.log('am i happening?')
                if(this.state.active === true) this.setState({active: false});
                if(this.state.active === false) this.setState({active: true});
                break;
            case 'menuShow':
                if(this.state.menuShow){
                    this.setState({
                        menuShow: false,
                        deleteWindow: false
                    })
                }
                else {
                    this.setState({
                        menuShow: true,
                        deleteWindow: false
                    })
                }
                break;
            case 'deleteShow':
                this.setState({
                    deleteWindow: true,
                    menuShow: false
                })
                break;

            default: return;
        }
        
    }

    render() {
        console.log(this.props.track)

        if(this.props.song && this.props.song.track.id === this.props.track.id)
        {
            return(
                // ACTIVE TRACK CARD
                <div className="track__active">
                    <div className="track__active-title-container">
                        <h5 className="track__active-title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Track Title"}</h5>
                    </div>
                    <p className="track__active-billboard">Billboard</p>
                    <div className="track__active-metrics">
                        <p className="track__active-info">{this.props.track.listens} Listens</p>
                        <p className="track__active-info">Favorites</p>
                    </div>
                    <div className="track__active-actions">
                        <i className="fas fa-list track__active-icons"></i>
                        <i className="fas fa-ellipsis-v track__active-icons"
                            onClick={this.changeState.bind(this, 'menuShow')}></i>
                    </div>

                    {this.state.menuShow ? 

                    // DROPDOWN MENU
                    <div className="track__dropdown">
                        <ul>
                            <li className="track__menu-item">Delete Track</li>
                            <li className="track__menu-item">Add to Favorites</li>
                        </ul>
                    </div> : ""}

                    {this.state.deleteShow ? 
                    <div className="track__delete-window">
                        <h2>Are you sure you want to delete this track?</h2>
                        <button className="btn btn--green">Delete</button>
                        <button className="btn">Cancel</button>
                    </div> : ""}
                </div>
            )
        }

        else 
        {
            return(
                // NON ACTIVE TRACK CARD
                <div className='track' onClick={this.setTrack.bind(this)}>
                    <div className="track__image-container">
                        <img src={this.props.track.coverURL ? this.props.track.coverURL : Logo} alt="track-cover" className="track__image"/>
                    </div>
                    <div className="track__info">
                        <div className="track__title-container">
                            <h5 className="track__title">{this.props.track.trackTitle ? this.props.track.trackTitle : "Track Title"}</h5>
                        </div>
                        <p className="track__artists">{this.props.track.userName}</p>
                        <p className="track__date">{this.props.track.created_at.toString()}</p>
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
    return bindActionCreators({ changeSong, addFavorite, deleteFavorite } ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);