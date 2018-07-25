import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Track from '../boxes/track';

import Song from '../../samples/guitar.wav';

class ProfileTracks extends Component {
    constructor(){
        super();

        this.state = {
            songs: [Song, Song, Song, Song, Song, Song, Song, Song, Song, Song, Song, Song]
        }
        this.createTracks.bind(this);
    }


    createTracks() {
        return this.state.songs.map(song => {
            return <Track track={song} title='Track Title'/>
        })
    }


    render(){
        
        return(
            <section className="profile-tracks">
                <div className="profile-tracks__link-container">
                    <Link to={`/all-tracks/profile=${this.props.artist.id}`} className="profile-tracks__link">All Tracks</Link>
                </div>

                <div className="profile-tracks__track-container">
                    {this.createTracks()}
                </div>
            </section>
        )
    }
}

export default ProfileTracks;