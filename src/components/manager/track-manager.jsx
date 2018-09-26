import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllTracks, deleteTracks } from "../../actions/audio_actions";

class TrackManager extends Component {
    constructor(){
        super();

        this.selectedTracks = [];
    }

    state = { showConfirm : false, showEdit : false, track: null };



    componentWillMount(){
        this.props.fetchAllTracks(this.props.login.data.id);
    }

    mapTracksToList(){
        console.log(this.props.allTracks)
         return this.props.allTracks.tracks.map(track => {
             return(
                <div className="form__radio-group track-manager__item" key={track.id}>
                    <input type="checkbox"
                    className="form__radio-input"
                    value={track.id}
                    id={track.id}
                    
                    />
                    <label 
                    onClick={this.addTrackToSelected.bind(this, track)}
                    htmlFor={track.id} 
                    className="form__label-radio">

                        <span className="form__radio-button"></span>
                        {track.trackTitle}
                    </label>

                    <i onClick={this.editWindow.bind(this, track)}
                    className="fas fa-edit track-manager__edit-icon"></i>
                </div>
             )
        })
    }

    addTrackToSelected(track){
        // console.log(track);
        let length = this.selectedTracks.length; // store the original length
        for(let idx = 0; idx < this.selectedTracks.length; idx++){ // search for the track id in the array, removing it if we find it.
            if(this.selectedTracks[idx] == track.id){
                this.selectedTracks.splice(idx, 1);
            }
        }
        if(length === this.selectedTracks.length){ //if we made no change, push the new id in, otherwise return.
            this.selectedTracks.push(track.id);
            console.log(this.selectedTracks);
        }
        else{
            return;
        }
    }

    promptDeleteSelectedTracks(){
        console.log(this.props.login.data.id)
        if(!this.selectedTracks.length){
            console.log("can't do that")
            return;
        }
        else {
            this.setState({showConfirm: true});
        }
    }

    deleteSelectedTracks(){
        console.log(this.selectedTracks);
        this.props.deleteTracks(this.selectedTracks, this.props.login.data.id);
        this.changeStateHandler('confirm');
    }

    editWindow(track){
        this.setState({
            showEdit: true,
            track: track
        })
    }

    changeStateHandler(view){
        console.log(view)
        switch(view){
            case 'edit':
                this.setState({showEdit: false, track : null});
                return;
            case 'cancel':
                this.setState({showConfirm: false});
            case 'confirm':
                this.selectedTracks = [];
                this.setState({showConfirm: false})

                return;
        }
    }

    render(){
        return(
            <section>
                <i onClick={this.promptDeleteSelectedTracks.bind(this)}
                className="fas fa-trash-alt track-manager__trash-icon"></i>
                <ul className="track-manager">
                    {this.props.allTracks ? this.mapTracksToList() : ''}
                </ul>
                {this.state.showConfirm ? 

                      <div className="track-manager__confirm-window">
                            <h2 className="track-manager__header">Are you sure you want to delete {this.selectedTracks.length} track(s)?</h2>
                            <button onClick={this.deleteSelectedTracks.bind(this)}
                            className='btn btn--green track-manager__confirm'>Confirm</button>
                            <button onClick={this.changeStateHandler.bind(this, 'cancel')}
                            className="btn track-manager__cancel">Cancel</button>

                      </div>
                      :
                      ""  
                }
                {this.state.showEdit ? 

                    <div className="track-manager__confirm-window">
                        <h2 className="track-manager__header">Change the track title</h2>
                        <input type="text" className="track-manager__input" value={this.state.track.trackTitle} />
                        <h2 className="track-manager__header">Change the track's descripton</h2>
                        <textarea className="track-manager__input" value={this.state.track.trackDescription} />
                        <button
                        className='btn btn--green track-manager__confirm'>Submit</button>
                        <button onClick={this.changeStateHandler.bind(this, 'edit')}
                        className="btn track-manager__cancel">Cancel</button>

                    </div>
                    :
                    ""  
                    }
            </section>
        )
    }
}

function mapStateToProps({ allTracks, login }){
    return { allTracks, login }
}

export default connect(mapStateToProps, { fetchAllTracks, deleteTracks })(TrackManager);