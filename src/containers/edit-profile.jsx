import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form'; 

import { fetchInstrumentsAndGenres, setArtistInfo } from "../actions/index";

import TextInput from "./Forms/text_input";


class EditProfile extends Component {
    constructor(){
        super();

        this.selectedGeneres = [];

        this.selectedInstruments = [];
    }

    state = {
        searchResults: ['thing', 'thing2']
    }

    componentDidMount(){
        this.props.fetchInstrumentsAndGenres();
    }

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
            searchResults: results
        })
        
    }

    queryGeneres(e){
        console.log(this.props.instrumentsAndGenres)
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
            searchResults: results
        })
    }

    fillSearchResults(){
       return this.state.searchResults.map(item => {
            return <li key={item} onClick={this.addToSelections} className='edit-profile__results-item'>{item}</li>
        })
    }

    addToSelections(){

    }




    onSubmitHandler(values){
        console.log(values);
        this.props.setArtistInfo(values);
    }

    render(){
        const { handleSubmit } = this.props;
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
                        
                    </div>
                    <div className="edit-profile__genre-results">
                        <h3>
                            Genres
                        </h3>
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