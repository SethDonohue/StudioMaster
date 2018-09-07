import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { getAccountInfo } from "../actions/index";

import NavBar from './navs/nav_bar';
import NavBtn from './navs/nav_btn';
import Footer from "./footer/footer_main";
import Banner from "../components/profile/profile_banner";
import Actions from "../components/profile/profile_actions";
import Toggle from "../components/manager/toggle";

class Manager extends Component {

    componentWillMount(){
        this.props.getAccountInfo(this.props.match.params.id);
    }

    render(){
        if(!this.props.login || !this.props.userProfile){
            return(
                <div>
                    <main className='no-user'>
                        <NavBar />
                        <NavBtn />
                        <div className="no-user__container">
                            <h1 className='no-user__text'>
                                Login to view this page
                            </h1>
                            <Link className='no-user__link btn btn--transparent-purple' to='/'> Home Page </Link>
                        </div>
                    </main>
                    <Footer />
                </div>
            )
        }

        else if(this.props.login.data.id === this.props.userProfile[0].id){
            return(
                <main className="section-manager">
                    <NavBar />
                    <NavBtn />
                    <Banner artist={this.props.userProfile[0]} />
                    {this.props.login !== null && this.props.login.data.id === this.props.userProfile[0].id ? <Actions artist={this.props.userProfile[0]} /> : ''}
                    <Toggle />
                    <Footer />
                </main>
            )
        }

        else{
            return(
                <div>
                    <main className='no-user'>
                        <NavBar />
                        <NavBtn />
                        <div className="no-user__container">
                            <h1 className='no-user__text'>
                                Login to view this page
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

function mapStateToProps({ login, userProfile }) {
    return {login, userProfile}
}

export default connect(mapStateToProps, {getAccountInfo})(Manager);