import React, { Component } from 'react';
import logo from "../../img/logos/StudioMaster-Logo_White.png";
import { Link } from "react-router-dom";


class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={logo} alt="White StudioMaster Logo" className="footer__logo"/>

                    <p className="footer__brand">
                        &copy; 2018 StudioMaster LLC
                    </p>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav-list">
                        <p className="footer__nav-title">
                            Company
                        </p>
                        <li className="footer__nav-item"><Link to="/company" className="footer__nav-link">About</Link></li>
                        <li className="footer__nav-item"><Link to="/company" className="footer__nav-link">Careers</Link></li>
                        <li className="footer__nav-item"><Link to="/company" className="footer__nav-link">Legal</Link></li>
                        <li className="footer__nav-item"><Link to="/company" className="footer__nav-link">Privacy</Link></li>
                        <li className="footer__nav-item"><Link to="/company" className="footer__nav-link">Cookies</Link></li>
                    </ul>

                    <ul className="footer__nav-list">
                        <p className="footer__nav-title">
                            Community
                        </p>
                        <li className="footer__nav-item"><Link to="/community" className="footer__nav-link">Artists</Link></li>
                        <li className="footer__nav-item"><Link to="/community" className="footer__nav-link">Producers</Link></li>
                        <li className="footer__nav-item"><Link to="/community" className="footer__nav-link">Developers</Link></li>
                        <li className="footer__nav-item"><Link to="/community" className="footer__nav-link">Investors</Link></li>
                    </ul>

                    <ul className="footer__nav-list">
                        <p className="footer__nav-title">
                            Support
                        </p>
                        <li className="footer__nav-item"><Link to="Support" className="footer__nav-link">Account</Link></li>
                        <li className="footer__nav-item"><Link to="Support" className="footer__nav-link">FAQs</Link></li>
                        <li className="footer__nav-item"><Link to="Support" className="footer__nav-link">Documentation</Link></li>
                        <li className="footer__nav-item"><Link to="Support" className="footer__nav-link">Contact Us</Link></li>
                    </ul>

                    <ul className="footer__nav-list">
                        <p className="footer__nav-title">
                            Follow us
                        </p>
                        <li className="footer__nav-item"><Link to="/" className="footer__nav-link">Facebook</Link></li>
                        <li className="footer__nav-item"><Link to="/" className="footer__nav-link">Instagram</Link></li>
                        <li className="footer__nav-item"><Link to="/" className="footer__nav-link">Twitter</Link></li>
                        <li className="footer__nav-item"><Link to="/" className="footer__nav-link">Google</Link></li>
                    </ul>

                </div>
            </footer>
        )
    }
}

export default Footer;