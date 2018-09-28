import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAccountInfo, fetchProfileInstrumentGenres } from "../actions/index";

import NavBar from './navs/nav_bar';
import NavBtn from './navs/nav_btn';
import Footer from "./footer/footer_main";
import Banner from "../components/profile/profile_banner";
import Info from "../components/profile/profile_info";
import Tracks from "../components/profile/profile_tracks";
import Albums from "../components/profile/profile_albums";
import Actions from "../components/profile/profile_actions";


class Profile extends Component {

    componentDidMount(){
        this.props.getAccountInfo(this.props.match.params.id);
        this.props.fetchProfileInstrumentGenres(this.props.match.params.id, 3);
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
                console.log(this.props.login)
                return (
                    <main className="section-profile">
                        <NavBar />
                        <NavBtn />
                        <Banner artist={this.props.userProfile[0]} />
                        <Actions artist={this.props.userProfile[0]}/>                        
                        <Info artist={this.props.userProfile} login={this.props.login} />
                        <Tracks artist={this.props.userProfile[0]} login={this.props.login} />
                        <Albums artist={this.props.userProfile[0]} />
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

export default connect(mapStateToProps, {getAccountInfo, fetchProfileInstrumentGenres})(Profile)