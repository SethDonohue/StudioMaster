import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";

import { newPhoto } from "../actions/photo_actions";

import FileInput from "./Forms/file_input";

class ChangePhoto extends Component {

    onSubmit(values){
        console.log('hello');
    }

    render(){
        const { handleSubmit } = this.props;
        
        return(
            <section className="photoForm">
                <h1>
                    Change profile picture
                </h1>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='photo' component={FileInput} />

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