import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logos/StudioMaster-Logo_Purple-Light.png";

class NavBtn extends Component {

    render(){
        return (
            <div className="mobile-nav">
                <Link to="/">
                    <img src={Logo} alt="StudioMaster Logo" className="mobile-nav__brand"/>
                </Link>

                <input type="checkbox" id="nav-toggle" className="mobile-nav__toggle"/>
                <label htmlFor="nav-toggle" className="mobile-nav__button">
                    <span className="mobile-nav__menu-icon"></span>
                </label>

                <div className="mobile-nav__nav">
                    <Link to="/">
                        <h2 className="mobile-nav__title">
                            <strong>Studio</strong>Master
                        </h2>
                    </Link>

                    <ul className="mobile-nav__list">
                        <li className="mobile-nav__item">
                            <Link to="/" className="mobile-nav__link">Billboard</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to="/" className="mobile-nav__link">Features</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to="/" className="mobile-nav__link">About</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to="/" className="mobile-nav__link">Support</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to="/registration" className="mobile-nav__link">Create Account</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to="/registration" className="mobile-nav__link">Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBtn;