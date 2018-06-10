import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/logos/StudioMaster-Logo_White.png";


class NavBar extends Component {


    render(){
        return(
            <div className="navigation">
                <div className="navigation__logo-box">
                    <a href="/"><img src={logo} alt="" className="navigation__logo"/></a>
                </div>
                <div className="navigation__nav">
                    <ul className="navigation__nav-container">
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Billboard</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Features</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">About</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Support</a>
                        </li>
                    </ul>
                    <span className="navigation__divider">&nbsp;</span>
                    <ul className="navigation__nav-container">
                        <li className="navigation__item">
                            <Link to="/registration" className="navigation__link">Create Account</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/registration" className="navigation__link">Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;