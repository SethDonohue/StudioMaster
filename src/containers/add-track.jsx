import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import FileInput from './Forms/file_input';
import TextInput from './Forms/text_input';


class AddTrack extends Component {

    onSubmit(values) {
        console.log('hello')
    }

    render() {

        const { handleSubmit } = this.props
        return(
            <section className="addTrack">
                <h1 className='addTrack-header'>
                    Add a track
                </h1>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    <Field name='Track' component={FileInput} />

                    <Field name='Title' component={TextInput} placeholder='Name your track' />

                    <button className='btn btn--green' type='submit'>
                        Upload your track
                    </button>
                </form>

            </section>
        )
    }
}

export default reduxForm({
    form: 'addtrack'
})(connect(null, null)(AddTrack))