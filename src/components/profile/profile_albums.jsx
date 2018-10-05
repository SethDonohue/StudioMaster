import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Album from "../boxes/album";

import { fetchProfileAlbums } from "../../actions/audio_actions";

const albums = [1,2,3,4,5]

class ProfileAlbums extends Component {

    componentWillMount(){
        this.props.fetchProfileAlbums(this.props.artist.id);
    }

    mapAlbums(){
        return this.props.albums.data.albums.map(album => {
            return <Album key={album.id} info={album} />
        })
    }
    render(){
        return(
            <section className="profile-tracks profile-tracks--albums">

                <div className="profile-tracks__link-container">
                    <Link to={`/all-albums/tracks/profile/${this.props.artist.id}`} className="profile-tracks__link">All Albums</Link>
                </div>

                <div className="profile-tracks__track-container">
                    {this.props.albums ? this.mapAlbums() : "user has not created albums yet"}
                </div>
            </section>
        )
    }
}

function mapStateToProps({albums}){
    return {albums};
}

export default connect(mapStateToProps, { fetchProfileAlbums })(ProfileAlbums);