import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


import TextInput from '../Forms/text_input';
import RadioInput from '../Forms/radio_input';
import SelectInput from '../Forms/select_input';
import PopUp from '../../components/boxes/pop_up.jsx';

const securityQuestions = ['Please choose a security question', 'Example1', 'Example2', 'Example3']



class SignUp extends Component {

    legalAgreement(){
        console.log("hello")
    }

    onSubmit(values){
        console.log(values)
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <section className="section-register">
                <h2 className="login-header">
                    Create An Account
                </h2>
            </section>
        );
    }
}

function validate(values){
    const errors = {}
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignUp'
})(SignUp);