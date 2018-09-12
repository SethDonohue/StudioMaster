import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from "../../img/logos/StudioMaster-Logo.png";
import NoUser from './nav_bar-no-user';
import LoggedInUser from './nav_bar-logged_in';

import { checkForLoginSession } from '../../actions/index';


class NavBar extends Component {

    componentDidMount() {
        this.props.checkForLoginSession();
    }

    render(){
        
        return(
            <div className="navigation">
                <div className="navigation__logo-box">
                    <a href="/"><img src={Logo} alt="" className="navigation__logo"/></a>
                </div>
                <div className="navigation__nav">
                    <ul className="navigation__nav-container">
                        <li className="navigation__item">
                            <Link to={this.props.login && this.props.login.data && this.props.login.data.id !== null ? "/profile/" + this.props.login.data.id : "/registration"} className="navigation__link">My Studio</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/" className="navigation__link">Music Board</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/" className="navigation__link">Billboard</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/" className="navigation__link">About</Link>
                        </li>
                    </ul>
                    <span className="navigation__divider">&nbsp;</span>
                    
                    {this.props.login && this.props.login.data && this.props.login.data.id !== null ? <LoggedInUser user={this.props.login} /> : <NoUser />}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ login }) {
    return { login }
}

export default connect(mapStateToProps, { checkForLoginSession })(NavBar);