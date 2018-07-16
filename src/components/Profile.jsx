import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAccountInfo } from "../actions/index";

import NavBar from './navs/nav_bar';
import NavBtn from './navs/nav_btn';
import Footer from "./footer/footer_main";
import Banner from "../components/boxes/profile_banner";


class Profile extends Component {

    componentDidMount(){
        this.props.getAccountInfo(this.props.match.params.id);
    }

    render(){        
        if(this.props.userProfile === null) {
            return(
                
                    <div>
                        <main className='no-user'>
                            <NavBar />
                            <NavBtn />
                            <div className="no-user__container">
                                <h1 className='no-user__text'>
                                    Fetching User Information...
                                </h1>
                            </div>
                        </main>
                        <Footer />
                    </div>
            )
        }


        else {

            if(!this.props.userProfile.length) {
                return (
                    <div>
                        <main className='no-user'>
                            <NavBar />
                            <NavBtn />
                            <div className="no-user__container">
                                <h1 className='no-user__text'>
                                    Oops, looks like this user doesn't exist.
                                </h1>
                                <Link className='no-user__link btn btn--transparent-purple' to='/'> Home Page </Link>
                            </div>
                        </main>
                        <Footer />
                    </div>
                )
            }

        
            else{

                console.log(this.props.userProfile)
                return (
                    <main className="section-profile">
                        <NavBar />
                        <NavBtn />
                        <Banner artist={this.props.userProfile[0]} />
                        <Footer />
                    </main>
                )
            }
        }
    }
}

function mapStateToProps({ login, userProfile }) {
    return {login, userProfile}
}

export default connect(mapStateToProps, {getAccountInfo})(Profile)