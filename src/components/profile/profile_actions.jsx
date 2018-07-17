import React, { Component } from 'react';

class ProfileActions extends Component {
    render(){
        return(
            <section className='profile-actions'>
                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container">
                        <i className="fas fa-plus"></i>
                    </div>

                    <p className="profile-actions__text">
                        Add Track
                    </p>
                </button>

                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container">
                        <i className="fas fa-users"></i>
                    </div>

                    <p className="profile-actions__text">
                        Collaborations
                    </p>
                </button>

                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container">
                        <i className="fas fa-signal"></i>
                    </div>

                    <p className="profile-actions__text">
                        Billboards
                    </p>
                </button>

                <button className="profile-actions__button">
                    <div className="profile-actions__icon-container">
                        <i className="far fa-envelope"></i>
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