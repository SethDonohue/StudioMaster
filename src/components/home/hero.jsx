import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Hero extends Component{
    render(){
        return(
            <section className='section-hero'>
                <div className="hero">
                    <h1 className="heading-primary">
                        Make amazing music together.
                    </h1>
                    <h1 className="heading-primary">
                        Anytime, anywhere.
                    </h1>
                    <Link to="/registration" className="btn btn--purple u-margin-right-big u-margin-top-small">get started</Link>
                    <Link to="/registration" className="btn btn--transparent">learn more</Link>
                </div>
                
            </section>
        )
    }
}

export default Hero;