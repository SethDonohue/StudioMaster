import React, { Component } from 'react';

import TrackManager from "./track-manager";


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

                            <li className="toggle__item" onClick={this.changeSelection.bind(this, 'genre')}>
                                <h2 className="toggle__header">Genres</h2>
                            </li>

                            <li className="toggle__item" onClick={this.changeSelection.bind(this, 'instrument')}>
                                <h2 className="toggle__header">Instruments</h2>
                            </li>

                        </ul>
                    </div>
                    {this.state.master === 'track' ? <TrackManager /> : ''}
                </main>
            )
    }
}
export default Toggle;