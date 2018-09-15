import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { Redirect } from 'react-router-dom';

import { fetchInstrumentsAndGenres, setArtistInfo } from "../actions/index";

import TextInput from "./Forms/text_input";


class EditProfile extends Component {
    constructor(){
        super();
    }

    state = {
        searchResults: [],
        queryFor: null,
        selectedGenres: [],
        selectedInstruments: []
    }

    componentDidMount(){
        this.props.fetchInstrumentsAndGenres();
    }

    //Server queries

    queryInstruments(e){
    
        const results = [];
        if(e.target.value.length){
            let re = new RegExp(`${e.target.value}+`);
            for(let idx = 0; idx < this.props.instrumentsAndGenres.instrumentList.length; idx++){
                if (re.test(this.props.instrumentsAndGenres.instrumentList[idx].instrument)){
                    results.push(this.props.instrumentsAndGenres.instrumentList[idx].instrument);
                }
            }
        }
        
        this.setState({
            searchResults: results,
            queryFor: 'instruments'
        })
        
    }

    queryGeneres(e){
        const results = [];
        if(e.target.value.length){
            let re = new RegExp(`${e.target.value}+`);
            for(let idx = 0; idx < this.props.instrumentsAndGenres.genreList.length; idx++){
                if (re.test(this.props.instrumentsAndGenres.genreList[idx].genre)){
                    results.push(this.props.instrumentsAndGenres.genreList[idx].genre);
                }
            }
        }

        this.setState({
            searchResults: results,
            queryFor: 'genres'
        })
    }

    //UI Mapping

    fillSearchResults(){
       return this.state.searchResults.map(item => {
            return <li key={item} onClick={this.addToSelections.bind(this, item)} className='edit-profile__results-item'>{item}</li>
        })
    }

    fillGenres(){
        return this.state.selectedGenres.map(genre => {
            return <p key={genre}>{genre}</p>
        });
    }

    fillInstruments(){
        return this.state.selectedInstruments.map(instrument => {
            return <p key={instrument}>{instrument}</p>
        });
    }



    addToSelections(item){
        
        if(this.state.queryFor === 'genres'){ 
            let currentGenres = this.state.selectedGenres; // Save the current state
            for(let idx = 0; idx < currentGenres.length; idx++){ // Make sure we aren't adding duplicate genres
                if(currentGenres[idx] === item) {
                    return;
                };
            }
            this.setState({
                selectedGenres: [...currentGenres, item] //New state with new and old genre values
            })
        }
        else{
            let currentInstruments = this.state.selectedInstruments;
            for(let idx = 0; idx < currentInstruments.length; idx++){ // Make sure we aren't adding duplicate Instruments
                if(currentInstruments[idx] === item) {
                    return;
                };
            }
            this.setState({
                selectedInstruments: [...currentInstruments, item]
            })
        }
    }

    //Submit Handler

    onSubmitHandler(values){
        values['instruments'] = this.state.selectedInstruments; //Manually add the selected genres and instruments into form packet
        values['genres'] = this.state.selectedGenres;
        console.log(values);
        this.props.setArtistInfo(values);
        this.props.closeWindow();
        
        this.setState({
            searchResults: [],
            queryFor: null,
            selectedGenres: [],
            selectedInstruments: []
        })
    }

    render(){
        const { handleSubmit } = this.props;

        if(this.state.formSent){
            return <Redirect to={`/profile/${this.props.login.data.id}`} />
        }
        return(
            <form className="edit-profile" onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}>
                <h2 className="edit-profile__header">
                    Describe yourself
                </h2>
                <div className="edit-profile__control">
                    <Field name='description' placeholder='What inspires you?' component={TextInput} />
                </div>
                <h2 className="edit-profile__header edit-profile__header--center">
                    What do you play?
                </h2>
                <div className="edit-profile__search-container">
                    <input onChange={this.queryInstruments.bind(this)}
                    placeholder='Search for instruments..' id='instrument-search' className='edit-profile__search' />
                    
                    <input onChange={this.queryGeneres.bind(this)}
                    placeholder='Search for genres..' id='genre-search' className='edit-profile__search' />
                </div>
                <div className="edit-profile__results-container">
                    <ul className="edit-profile__results-list">
                        {this.fillSearchResults()}
                    </ul>
                </div>

                <div className="edit-profile__selection-container">
                    <div className="edit-profile__instrument-results">
                        <h3>Instruments</h3>
                        {this.fillInstruments()}
                        
                    </div>
                    <div className="edit-profile__genre-results">
                        <h3>
                            Genres
                        </h3>
                        {this.fillGenres()}
                    </div>
                </div>

                <button className="btn btn--purple edit-profile__submit" type='submit'>Submit</button>

                
            </form>
        )
    }
}

function mapStateToProps({ login, instrumentsAndGenres }){
    return { login, instrumentsAndGenres }
}

export default reduxForm({
    form: "editProfile"

})(connect(mapStateToProps, {fetchInstrumentsAndGenres, setArtistInfo})(EditProfile));