import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './home/nav_bar.jsx';


class Profile extends Component {
    render(){
        return(
            <div>
                <NavBar />
                Profile Section
            </div>
        )
    }
}

export default connect(null, null)(Profile)