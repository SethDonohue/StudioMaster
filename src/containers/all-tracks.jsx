import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAccountInfo } from "../actions/index";
import { fetchAllTracks } from "../actions/audio_actions";

import NavBar from '../components/navs/nav_bar';
import NavBtn from '../components/navs/nav_btn';
import Footer from "../components/footer/footer_main";
import Banner from "../components/profile/profile_banner";
import Actions from "../components/profile/profile_actions";
import Track from "../components/boxes/track";



class AllTracksPage extends Component {

    createTracks() {
        return this.props.allTracks.tracks.map(song => {
            return <Track track={song} key={song.id} />
        })
    }

    componentDidMount(){
        this.props.getAccountInfo(this.props.match.params.id);
        this.props.fetchAllTracks(this.props.match.params.id);
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

            else{
                return(
                    <main className="all-tracks">
                        <NavBar />
                        <NavBtn />
                        <Banner artist={this.props.userProfile[0]} />
                        {this.props.login !== null && this.props.login.data.id === this.props.userProfile[0].id ? <Actions /> : ''}
                        <div className="all-tracks__container">
                            {this.props.allTracks && this.props.allTracks.tracks.length ? this.createTracks() : "No tracks to show"}
                        </div>
                    </main>
                )
            }
        }
    }
}

function mapStateToProps({login, userProfile, allTracks}){
    return {login, userProfile, allTracks};
}

export default connect (mapStateToProps, { getAccountInfo, fetchAllTracks })(AllTracksPage);