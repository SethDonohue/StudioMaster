import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from "react-router-dom";
import { fetchLogin } from "../../actions/index";

import { bindActionCreators } from "redux";


import TextInput from '../Forms/text_input';

class SignOn extends Component {


    onSubmit(values){
        console.log(values);
        this.props.fetchLogin(values)
    }
    
    render(){
        const { handleSubmit } = this.props;
        
            return (
                <section className="section-login">
                    <h2 className="login-header">
                        Welcome back
                    </h2>

                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">

                        <div className="form__login">

                            <Field name="email" placeholder="Email" component={TextInput} />

                            <Field name="password" placeholder="Password" component={TextInput} />
                            
                            <button className="btn btn--purple form__login-submit" type="submit">Sign In</button>
                            <Link to="/" className="link">Forgot your password?</Link>
                        </div>
    

                    </form>
                </section>
            );

    }
}

// Validations for this form

function validate(values){
    const errors = {};
    
    if(!values.email){
        errors.email = 'Please enter an email'
    }

    if(!values.password){
        errors.password = 'Please enter a password'
    }

    return errors;
}

// Redux container and Form hookup

function mapStateToProps ({login}) {
    return {login};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchLogin}, dispatch);
}

export default reduxForm({
    validate,
    form: 'SignOn'
})(connect(mapStateToProps, mapDispatchToProps)(SignOn));