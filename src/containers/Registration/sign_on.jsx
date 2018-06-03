import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';


import TextInput from '../Forms/text_input';

class SignOn extends Component {


    onSubmit(values){
        console.log(values);
    }
    
    render(){
        const { handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='placeholder mx-auto' />
                        <h2 className='text-center'>
                            StudioMaster
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <h2>Welcome Back</h2>
                            <Field name='email' placeholder='Email' component={TextInput} />
                            <Field name='password' placeholder='Password' component={TextInput} />
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values){
    const errors = {};
    
    if(!values.email){
        errors.email = 'Please enter an email.'
    }

    if(!values.password){
        errors.password = 'Please enter a password.'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'SignOn'
})(connect(null)(SignOn));