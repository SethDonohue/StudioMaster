import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

import profileStock from "../../img/dj-profile.png";
import ChangePhoto from "../../containers/change-photo";
import EditProfile from "../../containers/edit-profile";

class Banner extends Component {
    state={editWindowShown: false};

    changeEditState(){
        if(this.state.editWindowShown === true) this.setState({editWindowShown: false})
        else {
            this.setState({editWindowShown: true});
        }
    }


    render(){
        console.log(this.props)
        
        return (
            <section className='banner'>
                {this.props.login.data.id === this.props.artist.id ? 
                <Popup
                 trigger={<i className="fas fa-edit banner__edit-icon"></i>} 
                 className='banner__add-photo' 
                 modal>
                    <ChangePhoto userId={this.props.login.data.id} />
                </Popup> : ""}


                <img src={this.props.artist.imageURL !== null ? this.props.artist.imageURL : profileStock} alt="Profile" className="banner__img"/>
                <div className="banner__info">
                    <h5 className='banner__text'>
                        ARTIST
                    </h5>
                    <h2 className='banner__text--header'>
                        {`${this.props.artist.userName}`}
                    </h2>
                    

                </div>
                <div className="banner__actions">
                        {this.props.login.data.id === this.props.artist.id ? <div>

                                <Link to='/' className='btn btn--orange'>My Mix Board</Link>
                                <button onClick={this.changeEditState.bind(this)}
                                className='btn btn--grey'>Edit Profile</button>
                        </div>
                        
                        :
                        <div>
                            <button className="btn">Button</button>
                            <button className="btn">Other Button</button>
                        </div>
                        }

                    </div>
                        <div className={this.state.editWindowShown ? "banner__edit-profile" : "banner__edit-profile-hidden"}>
                                <i className="fas fa-times banner__edit-close" onClick={this.changeEditState.bind(this)}></i>
                                <EditProfile />
                        </div>
            </section>
        )
    }
}

function mapStateToProps ({ login }) {
    return { login }
}

export default connect(mapStateToProps, null)(Banner);