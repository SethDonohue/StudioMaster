import React, { Component } from 'react';
import { Link } from 'react-router-dom';



// This component will be broken up into smaller components later

class Features extends Component{
    render(){
        return(
            <section className="section-features">
                <div className="top-features">
                    <div className="top-features__info">
                        <h2 className="heading-secondary u-margin-bottom-xs">
                            Create. Share. Collaborate.
                        </h2>
                        <h2 className="heading-secondary">
                            No experience required
                        </h2>
                        <p>
                            StudioMaster is a cloud-based music studio, empowering musicians with the tools to work together in real-time from anywhere in the world. 
                        </p>
                        <Link to="#" className="btn btn--transparent">learn more</Link>
                    </div>
                </div>

                <div className="features">
                    <div className="features__image-box">
                    
                    </div>

                    <div className="features__info">
                        <h2 className="heading-secondary u-margin-bottom-medium">
                            See what people are making together with StudioMaster.                           
                        </h2>

                        <p className="u-margin-bottom-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia reprehenderit eius totam suscipit distinctio, aperiam rem earum dolor alias similique natus laboriosam dolorem recusandae culpa perferendis! Quaerat, consequuntur. Veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore animi fugit voluptas ullam. Veniam consequatur nemo dolor, quibusdam hic magni consectetur! Atque voluptatem quo quaerat, est nobis voluptatum similique!
                        </p>

                        <Link to="#" className="btn btn--purple u-margin-right-big">Featured artists</Link>
                        <Link to="#" className="btn btn--purple">learn more</Link>
                    </div>

                </div>

                <div className="bottom-features">
                    <h1 className="heading-primary">
                        Intuitive, powerful features
                    </h1>
                </div>
                <span className="bottom-features__divider">
                    &nbsp;
                </span>
                <div className="row">
                    <div className="col-1-3"></div>
                    <div className="col-1-3"></div>
                    <div className="col-1-3"></div>
                </div>
            </section>
        );
    }
}

export default Features;