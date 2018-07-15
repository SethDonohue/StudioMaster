import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAccountInfo } from "../actions/index";

import NavBar from './navs/nav_bar.jsx';


class Profile extends Component {

    componentDidMount(){
        this.props.getAccountInfo(this.props.match.params.id);
    }

    render(){        
        if(this.props.userProfile === null) {
            return(
                
                <main>
                    <NavBar />
                    <h2 className=''>
                        Fetching account information...
                    </h2>
                </main>
            )
        }


        else {

            if(!this.props.userProfile.length) {
                return (
                    <h1>
                        User does not exist
                    </h1>
                )
            }

        
            else{

                console.log(this.props.userProfile)
                return (
                    <h1>
                        Got em!
                    </h1>
                )
            }
        }
    }
}

function mapStateToProps({ login, userProfile }) {
    return {login, userProfile}
}

export default connect(mapStateToProps, {getAccountInfo})(Profile)