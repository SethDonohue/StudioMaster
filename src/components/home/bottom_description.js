import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/bottom_desc.css' 

// This component will be broken up into smaller components later

class BottomDescription extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-5 midpage_desc'>
                        <h3>
                            Create. Share. Collaborate.
                        </h3>
                        <h3>
                            No experience required.
                        </h3>
                        <p>
                            StudioMaster is a cloud-based music studio, empowering musicians with the tools to work together in real-time from anywhere in the world.
                        </p>
                        <button><Link to='/'>LEARN MORE</Link></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7'></div>
                    <div className='col-5'>

                        <h3>
                            See what other people are making with together with StudioMaster.
                        </h3>

                        <p>
                            Text that Blake neglected to put in! Let's all blame Blake together!
                        </p>

                        <button><Link to='/'>FEATURED ARTISTS</Link></button>
                        <button><Link to='/'>LEARN MORE</Link></button>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center card_row'>
                        <h3>Intuitive, powerful features</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col-2 purple_spacer'></div>
                    <div className='col-5'></div>
                </div>
                <div className='row card_row'>
                    <div className='col-3'>
                        <h6>
                            Easily Create Tracks and Music
                        </h6>
                        <p>
                            More text that Blake just couldn't bring himself to write.
                        </p>
                        <Link to='/'>Learn More</Link>
                    </div>
                    <div className='col-3 mx-auto'>
                        <h6>
                            Publish and Share
                        </h6>
                        <p>
                            More text that Blake just couldn't bring himself to write.
                        </p>
                        <Link to='/'>Learn More</Link>
                    </div>
                    <div className='col-3'>
                        <h6>
                            Collaborate in Real-Time Online
                        </h6>
                        <p>
                            More text that Blake just couldn't bring himself to write.
                        </p>
                        <Link to='/'>Learn More</Link>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='mt-5'>
                        Get noticed and rise to the top.
                    </h2>

                    <h4 className='mt-4'>
                        View Billboards ->
                    </h4>
                </div>
            </div>
        );
    }
}

export default BottomDescription;