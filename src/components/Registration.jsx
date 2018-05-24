import React, { Component } from 'react';

import SignOn from '../containers/Registration/sign_on.jsx';
import SignUp from '../containers/Registration/sign_up.jsx';
import Footer from './footer/footer_main.jsx';

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