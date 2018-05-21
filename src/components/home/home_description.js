import React, { Component } from 'react';
import '../../styles/home_desc.css'
import { Link } from 'react-router-dom'

class HomeDescription extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center top_header'>
                            Make amazing music together.
                        </h2>
                        <h2 className='text-center'>
                            Anytime. Anywhere.
                        </h2>
                    </div>
                    <div className='col-6 mx-auto'>
                        <button className='get_started'><Link to='/'>Get Started</Link></button>
                        <button ><Link to='/'>Learn More</Link></button>
                    </div>
                    
                   
                </div>
            </div>
        )
    }
}

export default HomeDescription;