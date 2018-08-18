import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { newTrack } from '../actions/audio_actions';

import FileInput from './Forms/file_input';
import TextInput from './Forms/text_input';

import validations from '../validations/add_track';


class AddTrack extends Component {

    state = {track : null};

    onSubmit(values) {
        console.log(values);
        console.log(this.state.track);

        const track = new FormData();
        track.append('')
        this.props.newTrack()
    }

    fileSelectedHandler(event){
        console.log(event.target.files[0]);
        this.setState({track: event.target.files[0]});
        console.log(this.state);
    }

    render() {

        const { handleSubmit } = this.props
        return(
            <section className="addTrack">

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='addTrack__form'>
                    <h1 className='addTrack-header'>
                        Add a track
                    </h1>

                    <Field name='track' component={FileInput} onChange={this.fileSelectedHandler.bind(this)} />

                    <Field name='title' component={TextInput} placeholder='Name your track' />

                    <Field name='description' component={TextInput} placeholder='Description (Optional)' />

                    <button className='btn btn--green' type='submit'>
                        Upload your track
                    </button>
                </form>

            </section>
        )
    }
}

export default reduxForm({
    validate: validations,
    form: 'addtrack'
})(connect(null, { newTrack })(AddTrack))