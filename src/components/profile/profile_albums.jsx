import React, { Component } from "react";
import { Link } from "react-router-dom";

import Album from "../boxes/album";

const albums = [1,2,3,4,5]

class ProfileAlbums extends Component {

    mapAlbums(){
        return albums.map(album => {
            return <Album key={album} />
        })
    }
    render(){
        return(
            <section className="profile-tracks">

                <div className="profile-tracks__link-container">
                    <Link to={`/all-albums/tracks/profile/${this.props.artist.id}`} className="profile-tracks__link">All Albums</Link>
                </div>

                <div className="profile-tracks__track-container">
                    {this.mapAlbums()}
                </div>
            </section>
        )
    }
}

export default ProfileAlbums;