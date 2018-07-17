import React, { Component } from 'react';
import { Link } from "react-router-dom";

import profileStock from "../../img/dj-profile.png";

class Banner extends Component {
    render(){
        console.log(this.props.artist)
        return (
            <section className='banner'>
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
                    <Link to='/' className='btn btn--green'>My Mix Board</Link>
                    <button className='btn btn--grey'>Edit Profile</button>
                </div>
            </section>
        )
    }
}

export default Banner;