import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Track from "../boxes/track";



// This component will be broken up into smaller components later

class Features extends Component{
    render(){
        return(
            <section className="section-features">
                <div className="top-features">
                    <h1 className="heading-primary bottom-features__header u-center-text u-margin-bottom-medium">
                        Intuitive, powerful features
                    </h1>
                    <div className="top-features__divider u-margin-bottom-medium"></div>
                    <div className="top-features__three-cards">
                            <div className="row">
                                <div className="col-1-3">
                                    <div className="top-features__card">
                                        <i className="fas fa-play-circle top-features__icon"></i>
                                        <h3 className="heading-tertiary">
                                            Easily create music & tracks
                                        </h3>
                                        <ul className="top-features__list">
                                            <li>Quickly import your music or record an all new piece</li>
                                            <li>Easily collaborate with others, or work independently</li>
                                            <li>Power tools StudioMaster offers to edit, mix, and master your work</li>
                                        </ul>
                                    </div>
                                </div>
                                 <div className="col-1-3">
                                    <div className="top-features__card">
                                        <i className="fas fa-comments top-features__icon"></i>
                                        <h3 className="heading-tertiary">
                                            Collaborate in real-time online
                                        </h3>
                                        <ul className="top-features__list">
                                            <li>Share your skills and passion and work with other likeminded artists</li>
                                            <li>Collaborate with others on your work and theirs</li>
                                            <li>Create a group and develop new and exciting music together for the world to enjoy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="top-features__card">
                                        <i className="fas fa-rocket top-features__icon"></i>
                                        <h3 className="heading-tertiary">
                                            Publish & share
                                        </h3>
                                        <ul className="top-features__list">
                                            <li>Create your own music with StudioMaster and share your work</li>
                                            <li>Explore new genres, instruments, artists and more</li>
                                            <li>Find a team of musicians and create a masterpiece together</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                        <Link to="#" className="btn btn--transparent-purple">learn more</Link>
                    </div>

                </div>

                {/* <div className="bottom-features">
                    <h1 className="heading-primary bottom-features__header u-center-text u-margin-bottom-medium">
                        Intuitive, powerful features
                    </h1>
                    <div className="bottom-features__divider u-margin-bottom-medium">
                        
                    </div>

                    <div className="bottom-features__three-cards">
                        <div className="row">
                            <div className="col-1-3">
                                <div className="bottom-features__card">
                                    <i className="fas fa-play-circle bottom-features__icon"></i>
                                    <h3 className="heading-tertiary">
                                        Easily create music and tracks
                                    </h3>
                                    <p className="u-margin-bottom-medium">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis reprehenderit facilis ipsa atque ratione nulla sequi? Inventore reprehenderit, provident vitae, accusantium iste harum facilis, eligendi aspernatur corporis temporibus magnam!
                                    </p>
                                    <Link to="/" className="link">Learn More &rarr;</Link>
                                </div>
                            </div>
                            <div className="col-1-3">
                                <div className="bottom-features__card">
                                    <i className="fas fa-rocket bottom-features__icon"></i>
                                    <h3 className="heading-tertiary">
                                        Publish & share
                                    </h3>
                                    <p className="u-margin-bottom-medium">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis reprehenderit facilis ipsa atque ratione nulla sequi? Inventore reprehenderit, provident vitae, accusantium iste harum facilis, eligendi aspernatur corporis temporibus magnam!
                                    </p>
                                    <Link to="/" className="link">Learn More &rarr;</Link>
                                </div>
                            </div>
                            <div className="col-1-3">
                                <div className="bottom-features__card">
                                    <i className="fas fa-comments bottom-features__icon"></i>
                                    <h3 className="heading-tertiary">
                                        Collaborate in real-time online
                                    </h3>
                                    <p className="u-margin-bottom-medium">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis reprehenderit facilis ipsa atque ratione nulla sequi? Inventore reprehenderit, provident vitae, accusantium iste harum facilis, eligendi aspernatur corporis temporibus magnam!
                                    </p>
                                    <Link to="/" className="link">Learn More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-features__one-card">
                        <div className="bottom-features__card">
                            <i className="fas fa-play-circle bottom-features__icon"></i>
                            <h3 className="heading-tertiary u-margin-bottom-big">
                                Easily create music and tracks
                            </h3>

                            <i className="fas fa-rocket bottom-features__icon"></i>
                            <h3 className="heading-tertiary u-margin-bottom-big">
                                Publish & share
                            </h3>

                             <i className="fas fa-comments bottom-features__icon"></i>
                            <h3 className="heading-tertiary u-margin-bottom-big">
                                Collaborate in real-time online
                            </h3>

                            <Link to="/" className="link">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div> */}

                <div className="billboard">
                    {/* <div className="billboard__info">
                        <h1 className="heading-primary">
                            Get noticed and rise to the top.
                        </h1>
                        <Link to="#" className="billboard__link">View Billboards &rarr;</Link>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Features;