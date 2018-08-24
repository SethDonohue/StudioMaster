import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAccountInfo } from "../actions/index";

import NavBar from '../components/navs/nav_bar';
import NavBtn from '../components/navs/nav_btn';
import Footer from "../components/footer/footer_main";
import Banner from "../components/profile/profile_banner";
import Actions from "../components/profile/profile_actions";



class AllTracksPage extends Component {
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

        else{

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
        }
    }
}

function mapStateToProps({userProfile}){
    return {userProfile};
}

export default connect (mapStateToProps, null)(AllTracksPage);