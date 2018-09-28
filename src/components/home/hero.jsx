import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Hero extends Component{
    render(){
        return(
            <section className='section-hero'>
                <div className="hero">
                    <h1 className="heading-primary">
                        Create amazing music together. Anytime. Anywhere.
                    </h1>
                    <Link to="/registration" className="btn btn--yellow u-margin-right-big u-margin-top-small">Create Account</Link>
                    <Link to="/registration" className="btn btn--purple">Enter my studio</Link>
                </div>
                
            </section>
        )
    }
}

export default Hero;