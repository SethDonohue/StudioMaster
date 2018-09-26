import React, { Component } from "react";

class Album extends Component {
    render(){
        return(
            <div className='album'>
                <div className="album__album-cover">
                    <i className="far fa-play-circle album__play"></i>
                </div>
                <div className="album__text-container">
                    <p className="album__text">Album's name!</p>
                    <p className="album__text">Date Released</p>
                </div>
            </div>
        )
    }
}

export default Album;