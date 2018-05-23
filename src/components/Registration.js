import React, { Component } from 'react';

import SignOn from '../containers/Registration/sign_on';
import SignUp from '../containers/Registration/sign_up';
import Footer from './footer/footer_main';

class Registration extends Component {
    render(){
        return(
            <div>
                <SignOn />
                <SignUp />
                <Footer />
            </div>
        )
    }
}

export default Registration;