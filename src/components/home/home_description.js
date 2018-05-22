import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../../styles/home_desc.css'

class HomeDescription extends Component{
    render(){
        return(
            <div className='container-fluid border-bottom'>
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
                        <button className='get_started top_buttons'><Link to='/registration'>GET STARTED</Link></button>
                        <button className='top_buttons'><Link to='/'>LEARN MORE</Link></button>
                    </div>

                </div>
            </div>
        )
    }
}

export default HomeDescription;