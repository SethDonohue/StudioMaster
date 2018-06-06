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
                <h2 className="register-header">
                    Create An Account
                </h2>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
            
                    <div className="form__about">
                        <h3 className="heading-tertiary">
                            About you
                        </h3>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="fName" placeholder="First Name" component={TextInput}  />
                                <Field name="birthday" placeholder="Birthday (mm/dd/yyyy)" component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="lName" placeholder="Last Name" component={TextInput}  />
                                <Field name="email" placeholder="Email" component={TextInput}  />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-1">
                                <Field name="gender" value="male" fieldId="Man" label="Male" component={RadioInput} />
                                <Field name="gender" value="female" fieldId="Woman" label="Female" component={RadioInput} />
                                <Field name="gender" value="other" fieldId="Other" label="Other" component={RadioInput} />
                                <Field name="gender" value="N/A" fieldId="Nope" label="Prefer not to answer" component={RadioInput} />
                                <p className="form__disclaimer">
                                    Please note: This information will not be shared with anyone and is for internal use only.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="address" placeholder="Address" component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="city" placeholder="City" component={TextInput}  />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2-4">
                                <Field name="addressTwo" placeholder="Address Continued" component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="state" placeholder="State" component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="zip" placeholder="Zip Code" component={TextInput}  />                           
                            </div>
                        </div>
                        
                    </div>
                </form>
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