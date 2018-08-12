import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

import profileStock from "../../img/dj-profile.png";
import ChangePhoto from "../../containers/change-photo";

class Banner extends Component {
    

    render(){
        console.log(this.props.login)
        return (
            <section className='banner'>
                {this.props.login.data.id === this.props.artist.id ? <Popup trigger={<i className="fas fa-edit banner__edit-icon"></i>} className='banner__add-photo' modal>
                    <ChangePhoto />
                </Popup> : ""}
                <img src={profileStock} alt="Profile Picture" className="banner__img"/>
                <div className="banner__info">
                    <h5 className='banner__text'>
                        ARTIST
                    </h5>
                    <h2 className='banner__text--header'>
                        {`${this.props.artist.userName}`}
                    </h2>
                    

                </div>
                <div className="banner__actions">
                    <Link to='/' className='btn btn--orange'>My Mix Board</Link>
                    <button className='btn btn--grey'>Edit Profile</button>
                </div>
            </section>
        )
    }
}

function mapStateToProps ({ login }) {
    return { login }
}

export default connect(mapStateToProps, null)(Banner);