import React, { Component } from 'react';

import BrandPurple from "./brands/brand_purple.jsx";
import NavBar from "./home/nav_bar";
import SignOn from '../containers/Registration/sign_on.jsx';
import SignUp from '../containers/Registration/sign_up.jsx';
import Footer from './footer/footer_main.jsx';

class Registration extends Component {
    render(){
        return(
            <main>
                <BrandPurple />
                <NavBar />
                <SignOn />
                {/* <SignUp /> */}
                {/* <Footer /> */}
            </main>
        )
    }
}

export default Registration;