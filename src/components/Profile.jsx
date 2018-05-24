import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/profile.css';

class Profile extends Component {
    render(){
        return(
            <div>
                Profile Section
            </div>
        )
    }
}

export default connect(null, null)(Profile)