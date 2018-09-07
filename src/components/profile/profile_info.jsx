import React, { Component } from 'react';

class ProfileInfo extends Component {
    render() {
        return(
            <section className='profile-info'>
                <div className="profile-info__about">
                    <h2 className="profile-info__header">
                        About {this.props.artist.userName}
                    </h2>
                    <div className="profile-info__description-container">
                        <p className="profile-info__text">
                            {this.props.artist.description ? this.props.artist.description : "Artist has not entered a description yet"}
                        </p>
                    </div>

                    <div className="profile-info__list-container">
                        <h2 className="profile-info__header">
                            Expertise
                        </h2>
                        <ul className="profile-info__list">
                            <li className="profile-info__item">Instrument</li>
                            <li className="profile-info__item">Instrument</li>
                            <li className="profile-info__item">Instrument</li>
                        </ul>
                    </div>
                    <div className="profile-info__list-container">
                        <h2 className="profile-info__header">
                            Genres
                        </h2>
                        <ul className="profile-info__list">
                            <li className="profile-info__item">Genre</li>
                            <li className="profile-info__item">Genre</li>
                            <li className="profile-info__item">Genre</li>
                        </ul>
                    </div>
                </div>

                <div className="profile-info__snapshot">
                    <div className="profile-info__stats-container">
                            <h2 className="profile-info__header">
                                Artist Snapshot
                            </h2>
                            <p className="profile-info__stats">Will fill</p>
                            <p className="profile-info__stats">these in</p>
                            <p className="profile-info__stats">when we can</p>
                            <p className="profile-info__stats">upload audio</p>
                    </div>

                    <div className="profile-info__ad-container">
                        <p>AD GOES HERE</p>
                    </div>
                </div>

            </section>
        )
    }
}

export default ProfileInfo;