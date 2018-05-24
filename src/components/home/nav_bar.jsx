import React, { Component } from 'react';
import '../../styles/navbar.css'

class NavBar extends Component {


    render(){
        return(
            <div className='container-fluid home-nav'>
                <div className='row'>
                    <div className='col-3'>
                        <h4><strong>Studio</strong>Master</h4>
                    </div>
                    <div className='col-2'>

                    </div>
                    <nav className='col-7 '>
                        <div className='container-fluid'>
                            <div className='row'>
                                <ul className='col-7'>
                                    <li className=''>Billboards</li>
                                    <li className=''>Features</li>
                                    <li className=''>About</li>
                                    <li className=''>Support</li>
                                </ul>
                                <div className='col-1'>
                                    <div className='nav_border'></div>
                                </div>
                                <ul className='col-4'>
                                    <li className=''>Create Account</li>
                                    <li className=''>Log in</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar;