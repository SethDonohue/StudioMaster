import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SongBlade from "../boxes/song_blade";

import Guitar from "../../samples/guitar.wav";
import Bass from "../../samples/bass.wav";

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
                        <SongBlade title="Guitar Sample" track={Guitar} />
                        <SongBlade title="Bass Sample" track={Bass} />
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

                <div className="bottom-features">
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
                </div>

                <div className="billboard">
                    <div className="billboard__info">
                        <h1 className="heading-primary">
                            Get noticed and rise to the top.
                        </h1>
                        <Link to="#" className="billboard__link">View Billboards &rarr;</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;