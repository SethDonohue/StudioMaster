import React, { Component } from 'react';

import TrackManager from "./track-manager";
import AlbumManager from "./album-manager";
import ArtistManager from "./artist-manager";


class Toggle extends Component {

    state = {
        master: 'track'
    }

    changeSelection(view){
        this.setState({master: view});
    }

    render(){
            return(
                <main className="toggle">
                    <div className="toggle__container">
                        <ul className="toggle__list">
                            <li className="toggle__item" onClick={this.changeSelection.bind(this, 'track')}>
                                <h2 className="toggle__header">Tracks</h2>
                            </li>

                            <li className="toggle__item" onClick={this.changeSelection.bind(this, 'album')}>
                                <h2 className="toggle__header">Albums</h2>
                            </li>

                            <li className="toggle__item" onClick={this.changeSelection.bind(this, 'artist')}>
                                <h2 className="toggle__header">Artist</h2>
                            </li>

                        </ul>
                    </div>
                    {this.state.master === 'track' ? <TrackManager /> : ''}
                    {this.state.master === 'artist' ? <TrackManager /> : ''}
                    {this.state.master === 'album' ? <TrackManager /> : ''}
                </main>
            )
    }
}
export default Toggle;