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
                <section className="section-login">
                    <h2 className="login-header">
                        Welcome back
                    </h2>

                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
    
                        <Field name="email" placeholder="Email" style="form__login" component={TextInput} />

                        <Field name="password" placeholder="Password" style="form__login" component={TextInput} />
                    </form>
                </section>
            );

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