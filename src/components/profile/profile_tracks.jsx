import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import Track from '../boxes/track';

import {fetchProfileTracks} from "../../actions/audio_actions";

class ProfileTracks extends Component {
    constructor(){
        super();

        this.createTracks.bind(this);
    }

    componentWillMount(){
        this.props.fetchProfileTracks(this.props.artist.id)
    }


    createTracks() {
        return this.props.allTracks.tracks.map(song => {
            return <Track track={song} key={song.id} />
        })
    }


    render(){
        
        return(
            <section className="profile-tracks">
                <Link to={`/manager/${this.props.artist.id}`} className="profile-tracks__edit-link">
                    <i className="fas fa-edit"></i>
                </Link>
                <div className="profile-tracks__link-container">
                    <Link to={`/all-tracks/profile/${this.props.artist.id}`} className="profile-tracks__link">All Tracks</Link>
                </div>

                <div className="profile-tracks__track-container">
                    {this.props.allTracks !== null && this.props.allTracks.tracks.length ? this.createTracks() : "This user hasn't created any tracks yet."}
                </div>
            </section>
        )
    }
}
function mapStateToProps({ allTracks }){
    return { allTracks };
}

export default connect(mapStateToProps, { fetchProfileTracks })(ProfileTracks);