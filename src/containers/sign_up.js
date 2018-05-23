import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import '../styles/sign_up.css';

class SignUp extends Component {

    input(field){
        const className = `form-control my-3 ${field.meta.touched && field.meta.error ? 'border-danger':''}`;
            return(
                
                <div className='form-group'>
                    <input 
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder} 
                    className={className}
                    {...field.input}
                    />
                    <p className='validations'>{field.meta.touched ?  field.meta.error : ''}</p>
                </div>
                
            )
    }

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
                    <div className='col-6 mx-auto'>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field name='email' placeholder='Email' component={this.input} />
                            <Field name='password' placeholder='Password' component={this.input} />
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
    form: 'signup'
})(connect(null)(SignUp));