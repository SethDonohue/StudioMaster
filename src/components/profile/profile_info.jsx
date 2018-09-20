import React, { Component } from 'react';

import EditProfile from "../../containers/edit-profile";

class ProfileInfo extends Component {

    state={editWindowShown: false};

    changeEditState(){
        if(this.state.editWindowShown === true) this.setState({editWindowShown: false})
        else {
            this.setState({editWindowShown: true});
        }
    }

    componentDidMount(){
        if(this.state.editWindowShown) this.setState({editWindowShown: false});
    }

    mapGenres(){
        return this.props.artist[1].map(genre => {
            return <li key={genre.id} className='profile-info__item'>{genre.genre}</li>
        })
    }

    mapInstruments(){
        return this.props.artist[2].map(instrument => {
            return <li key={instrument.id} className="profile-info__item">{instrument.instrument}</li>
        })
    }

    render() {
        return(
            <section className='profile-info'>
                <div className="profile-info__about">
                    <i onClick={this.changeEditState.bind(this)} className="fas fa-edit profile-info__edit-icon"></i>
                    <h2 className="profile-info__header">
                        About {this.props.artist[0].userName}
                    </h2>
                    <div className="profile-info__description-container">
                        <p className="profile-info__text">
                            {this.props.artist[0].description ? this.props.artist[0].description : "Artist has not entered a description yet"}
                        </p>
                    </div>

                    <div className="profile-info__list-container">
                        <h2 className="profile-info__header">
                            Expertise
                        </h2>
                        <ul className="profile-info__list">
                            {this.props.artist && this.props.artist[2] && this.props.artist[2].length ? this.mapInstruments() : <li className='profile-info__item'>No Instruments Available</li>}
                        </ul>
                    </div>
                    <div className="profile-info__list-container">
                        <h2 className="profile-info__header">
                            Genres
                        </h2>
                        <ul className="profile-info__list">
                            {this.props.artist && this.props.artist[1] && this.props.artist[2].length ? this.mapGenres() : <li className='profile-info__item'>No Genres Available</li>}
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

                <div className={this.state.editWindowShown ? "banner__edit-profile" : "banner__edit-profile-hidden"}>
                    <i className="fas fa-times banner__edit-close" onClick={this.changeEditState.bind(this)}></i>
                    <EditProfile closeWindow={this.changeEditState.bind(this)} />
                </div>

            </section>
        )
    }
}

export default ProfileInfo;