import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOff } from '../../actions/index';

class LoggedInUser extends Component {

    signOffUser(){
        this.props.signOff();
    }

    render(){
        
        return(
            <ul className="navigation__nav-container">
                <li className="navigation__item">
                    <Link to={`/profile/${this.props.user.data.id}`} className="navigation__link"><img src={this.props.user.data.info.imageURL} className='navigation__profile-picture' />{this.props.user.data.info.firstName}</Link>
                </li>
                <li className="navigation__item" onClick={this.signOffUser.bind(this)}>
                    <a className="navigation__link">Log Off</a>
                </li>
            </ul>
        )
    }
}

export default connect(null, { signOff })(LoggedInUser);