import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import axios from "axios";

import { newPhoto } from "../actions/photo_actions";

import FileInput from "./Forms/file_input";

class ChangePhoto extends Component {
    state = {photo: 'null'};

    onSubmit(values){
        const formData = new FormData();
        formData.append('image', this.state.photo, this.state.photo.name);
        axios.post('http://localhost:8080/changePhoto', formData)
            
    }

    fileSelectedHandler(event){
        console.log(event.target.files[0]);
        this.setState({photo: event.target.files[0]});
        console.log(this.state);
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <section className="photoForm">
                <h1>
                    Change profile picture
                </h1>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='photo' component={FileInput} onChange={this.fileSelectedHandler.bind(this)} types='.jpg, .png, .jpeg' />

                    <button className='btn btn--green' type="submit">Upload</button>

                </form>
            </section>
        )
    }
}

function validate(values){
    const errors = {}

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewProfilePicture'
})(connect(null, {newPhoto})(ChangePhoto));