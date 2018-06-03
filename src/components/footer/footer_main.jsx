import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return(
            <div className='container-fluid footer-background'>
                <div className='row'>
                    <div className='col-3'>
                        <h2 className='company-brand'><strong>Studio</strong>Master</h2>

                        <p className='company-brand'>&copy;StudioMaster LLC 2018</p>
                    </div>

                    <div className='col-9 footer-options'>
                        <ul>
                            <strong>COMPANY</strong>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Legal</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                        </ul>
                        <ul>
                            <strong>COMMUNITY</strong>
                            <li>Artists</li>
                            <li>Producers</li>
                            <li>Developers</li>
                            <li>Investors</li>
                        </ul>
                        <ul>
                            <strong>SUPPORT</strong>
                            <li>Documentation</li>
                            <li>FAQ's</li>
                            <li>Help</li>
                        </ul>
                        <ul>
                            <strong>FOLLOW US</strong>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Google</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;