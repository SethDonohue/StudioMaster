import React, { Component } from 'react';

import BrandPurple from "./brands/brand_purple.jsx";
import NavBar from "./navs/nav_bar";
import NavBtn from "./navs/nav_btn";
import SignUp from '../containers/Registration/sign_up.jsx';
import Footer from './footer/footer_main.jsx';

class Registration extends Component {
    render(){
        return(
            <main className="page-registration">
                <NavBar />
                <NavBtn />
                <BrandPurple />
                <SignUp />
                <Footer />
            </main>
        )
    }
}

export default Registration;