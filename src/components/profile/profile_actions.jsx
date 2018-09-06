import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

import AddTrack from '../../containers/add-track';

class ProfileActions extends Component {
    render(){
        return(

            //Button for add track and associating modal
            <section className='profile-actions'>
                <Popup trigger={
                        <button className="profile-actions__button">
                            <div className="profile-actions__icon-container profile-actions__icon-container--orange">
                                <i className="fas fa-plus profile-actions__icon profile-actions__icon--purple"></i>
                            </div>

                            <p className="profile-actions__text">
                                Add Track
                            </p>
                        </button>
                    } className='profile-actions__add-track' modal>

                    <AddTrack />


                </Popup>
                    

                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container profile-actions__icon-container--purple">
                        <i className="fas fa-users profile-actions__icon profile-actions__icon--white"></i>
                    </div>

                    <p className="profile-actions__text">
                        Collaborations
                    </p>
                </button>

                <Link to={`/manager/${this.props.artist.id}`} className="profile-actions__button">
                    <div className="profile-actions__icon-container profile-actions__icon-container--purple">
                        <i className="fas fa-signal profile-actions__icon profile-actions__icon--white"></i>
                    </div>

                    <p className="profile-actions__text">
                        Manager
                    </p>
                </Link>

                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container profile-actions__icon-container--purple">
                        <i className="far fa-envelope profile-actions__icon profile-actions__icon--white"></i>
                    </div>
                    
                    <p className="profile-actions__text">
                        Messages
                    </p>
                </button>

            </section>
        )
    }
}

export default ProfileActions;